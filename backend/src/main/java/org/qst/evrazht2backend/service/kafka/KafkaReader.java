package org.qst.evrazht2backend.service.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j2;
import org.apache.kafka.clients.consumer.*;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.qst.evrazht2backend.controller.WSController;
import org.qst.evrazht2backend.mapper.KafkaSinteringMachineToWS;
import org.qst.evrazht2backend.model.ws.WSSinteringMachine;
import org.qst.evrazht2backend.model.SinteringMachineListResponse;
import org.qst.evrazht2backend.repository.KafkaDataCacher;
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
    private final Consumer<String, String> consumer;

    final WSController wsController;

    final KafkaSinteringMachineToWS kafkaSinteringMachineToWS;

    final KafkaDataParser kafkaDataParser;

    final KafkaDataCacher kafkaDataCacher;

    public KafkaReader(
            WSController wsController,
            KafkaSinteringMachineToWS kafkaSinteringMachineToWS,
            KafkaDataParser kafkaDataParser,
            KafkaDataCacher kafkaDataCacher,
            @Value("${kafka.user}") String user,
            @Value("${kafka.pass}") String pass,
            @Value("${kafka.host}") String host,
            @Value("${kafka.ts-file}") String tsFile,
            @Value("${kafka.ts-pass}") String tsPass,
            @Value("${kafka.topic}") String topicName,
            @Value("${kafka.group-id}") String groupId
    ) {
        this.wsController = wsController;
        this.kafkaSinteringMachineToWS = kafkaSinteringMachineToWS;
        this.kafkaDataParser = kafkaDataParser;
        this.kafkaDataCacher = kafkaDataCacher;

        String jaasTemplate = "org.apache.kafka.common.security.scram.ScramLoginModule required username=\"%s\" password=\"%s\";";
        String jaasCfg = String.format(jaasTemplate, user, pass);

        String deserializer = StringDeserializer.class.getName();
        Properties props = new Properties();
        props.put("bootstrap.servers", host);
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");
        props.put("group.id", groupId);
        props.put("key.deserializer", deserializer);
        props.put("value.deserializer", deserializer);
        props.put("security.protocol", "SASL_SSL");
        props.put("sasl.mechanism", "SCRAM-SHA-512");
        props.put("sasl.jaas.config", jaasCfg);
        props.put("ssl.truststore.location", tsFile);
        props.put("ssl.truststore.password", tsPass);

        consumer = new KafkaConsumer<>(props);
        consumer.subscribe(Collections.singletonList(topicName));
    }

    @Scheduled(fixedRate = 500)
    public void poll() throws JsonProcessingException {
        ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
        final Iterator<ConsumerRecord<String, String>> itr = records.iterator();
        if (!itr.hasNext()) {
            return;
        }
        Map<String, Object> data;
        while (itr.hasNext()) {
            String rawData = itr.next().value();
            data = new ObjectMapper().readValue(rawData, HashMap.class);
            kafkaDataParser.update(kafkaDataCacher.getCache(), data);
            kafkaDataCacher.setLatestMoment(data.get("moment").toString());
            System.out.println(data.get("moment").toString());
        }
        sendCacheToWS();
    }

    //    @Scheduled(fixedRate = 500)
    private void sendCacheToWS() {
        List<WSSinteringMachine> wsSinteringMachines = kafkaDataCacher.getCache().values().stream().map(kafkaSinteringMachineToWS).collect(Collectors.toList());
        SinteringMachineListResponse response = new SinteringMachineListResponse(kafkaDataCacher.getLatestMoment(), wsSinteringMachines);
        wsController.sendUpdate(response);
    }
}
