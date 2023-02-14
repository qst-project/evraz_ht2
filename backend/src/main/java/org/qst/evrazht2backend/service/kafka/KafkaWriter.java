package org.qst.evrazht2backend.service.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.qst.evrazht2backend.service.Formatter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Random;

@Component
@EnableScheduling
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaWriter {
    private final KafkaTemplate<String, String> kafkaTemplate;
    final ObjectMapper mapper;

    public KafkaWriter(KafkaTemplate<String, String> kafkaTemplate, Formatter formatter) {
        this.kafkaTemplate = kafkaTemplate;
        this.mapper = formatter.getMapper();
    }

    public static float randFloat(float min, float max) {
        Random rand = new Random();
        return rand.nextFloat() * (max - min) + min;

    }


    @Scheduled(fixedRate = 3000)
    public void sendMessage() throws JsonProcessingException {
        float rand = randFloat(30.0f, 100.0f);
        SampleMessage sampleMessage = new SampleMessage("1", BigDecimal.valueOf(rand), Instant.now());
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        String msg = mapper.writeValueAsString(sampleMessage);
        kafkaTemplate.send("test", msg);
    }

}
