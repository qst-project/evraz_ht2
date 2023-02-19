package org.qst.evrazht2backend.service.kafka;

import lombok.extern.log4j.Log4j2;
import org.apache.kafka.clients.consumer.*;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.*;

@Component
@Log4j2
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaReader {
    private final Consumer<String, String> consumer;

    public KafkaReader(
            @Value("${kafka.user}") String user,
            @Value("${kafka.pass}") String pass,
            @Value("${kafka.host}") String host,
            @Value("${kafka.ts-file}") String tsFile,
            @Value("${kafka.ts-pass}") String tsPass,
            @Value("${kafka.topic}") String topicName,
            @Value("${kafka.group-id}") String groupId
    ) {
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

    //    @Scheduled(fixedRate = 500)
    public List<String> pollMessages() {
        ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
        final Iterator<ConsumerRecord<String, String>> itr = records.iterator();
        if (!itr.hasNext()) {
            return Collections.emptyList();
        }
        ArrayList<String> res = new ArrayList<>();
        while (itr.hasNext()) {
            res.add(itr.next().value());
        }
        log.warn((long) res.size());
        return res;
    }
}
