package org.qst.evrazht2backend.kafka;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling
public class KafkaWriter {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaWriter(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }


    @Scheduled(fixedRate = 3000)
    public void sendMessage() {
        kafkaTemplate.send("test", "message");
    }

}
