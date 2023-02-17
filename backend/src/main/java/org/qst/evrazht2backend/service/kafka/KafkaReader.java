package org.qst.evrazht2backend.service.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.MapType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import lombok.extern.log4j.Log4j2;
import org.apache.kafka.clients.consumer.*;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.qst.evrazht2backend.controller.WSController;
import org.qst.evrazht2backend.controller.model.WSSinteringMachine;
import org.qst.evrazht2backend.controller.model.WSSinteringMachineListResponse;
import org.qst.evrazht2backend.repository.InMemoryStorage;
import org.qst.evrazht2backend.repository.model.RawExhauster;
import org.qst.evrazht2backend.repository.model.RawSinteringMachine;
import org.qst.evrazht2backend.service.kafka.mapper.KafkaSinteringMachineToWS;
import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.*;
import java.util.stream.Collectors;

@Component
@Log4j2
@EnableScheduling
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaReader {
    private final InMemoryStorage inMemoryStorage;
    private final Consumer<String, String> consumer;

    final WSController wsController;

    final KafkaSinteringMachineToWS kafkaSinteringMachineToWS;

    public KafkaReader(
            WSController wsController,
            InMemoryStorage inMemoryStorage,
            @Value("${kafka.user}") String user,
            @Value("${kafka.pass}") String pass,
            @Value("${kafka.host}") String host,
            @Value("${kafka.ts-file}") String tsFile,
            @Value("${kafka.ts-pass}") String tsPass,
            @Value("${kafka.topic}") String topicName,
            @Value("${kafka.group-id}") String groupId,
            KafkaSinteringMachineToWS kafkaSinteringMachineToWS) {
        this.inMemoryStorage = inMemoryStorage;
        this.wsController = wsController;
        this.kafkaSinteringMachineToWS = kafkaSinteringMachineToWS;

        String jaasTemplate = "org.apache.kafka.common.security.scram.ScramLoginModule required username=\"%s\" password=\"%s\";";
        String jaasCfg = String.format(jaasTemplate, user, pass);
        String GROUP = groupId;

        String deserializer = StringDeserializer.class.getName();
        Properties props = new Properties();
        props.put("bootstrap.servers", host);
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");
        props.put("group.id", GROUP);
        props.put("key.deserializer", deserializer);
        props.put("value.deserializer", deserializer);
        props.put("security.protocol", "SASL_SSL");
        props.put("sasl.mechanism", "SCRAM-SHA-512");
        props.put("sasl.jaas.config", jaasCfg);
        props.put("ssl.truststore.location", tsFile);
        props.put("ssl.truststore.password", tsPass);

        consumer = new KafkaConsumer<>(props);
        consumer.subscribe(Arrays.asList(new String[]{topicName}));
    }

    public void listener(String message) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        TypeFactory typeFactory = mapper.getTypeFactory();
        MapType mapType = typeFactory.constructMapType(HashMap.class, String.class, String.class);
        HashMap<String, String> map = mapper.readValue(message, mapType);

        RawExhauster rawExhauster = new RawExhauster();
        rawExhauster.rotorNumber = 1;
        rawExhauster.number = Integer.valueOf(map.get("id"));
        rawExhauster.name = map.get("temp");
        log.info("accepted a message\t" + message);
        RawSinteringMachine rawSinteringMachine = new RawSinteringMachine(message, rawExhauster, rawExhauster);
        inMemoryStorage.update(Collections.singletonList(rawSinteringMachine));
    }

    @Scheduled(fixedRate = 1000)
    public void poll() {
        ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
        final Iterator<ConsumerRecord<String, String>> itr = records.iterator();
        if (!itr.hasNext()) {
            return;
        }
        ConsumerRecord<String, String> last = itr.next();
        while (itr.hasNext()) {
            last = itr.next();
        }
        if (last == null) {
            return;
        }
        String rawData = last.value();
        System.out.println(records.count());

        Map<String, Object> data;
        try {
            data = new ObjectMapper().readValue(rawData, HashMap.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        List<KafkaSinteringMachine> parsedData = KafkaDataParser.parse(data);
        List<WSSinteringMachine> wsSinteringMachines = parsedData.stream().map(kafkaSinteringMachineToWS).collect(Collectors.toList());
        WSSinteringMachineListResponse response = new WSSinteringMachineListResponse(
                data.get("moment").toString(),
                wsSinteringMachines
        );
        System.out.println(data.get("moment").toString());
        wsController.sendUpdate(response);
    }
}
