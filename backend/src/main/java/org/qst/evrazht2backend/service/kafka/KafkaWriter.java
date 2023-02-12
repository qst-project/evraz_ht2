package org.qst.evrazht2backend.service.kafka;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
@EnableScheduling
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaWriter {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaWriter(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public static float randFloat(float min, float max) {
        Random rand = new Random();
        return rand.nextFloat() * (max - min) + min;

    }

    @Scheduled(fixedRate = 3000)
    public void sendMessage() {
        float rand = randFloat(30.0f, 100.0f);
        kafkaTemplate.send("test", String.valueOf(rand));
    }

}
