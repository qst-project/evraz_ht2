package org.qst.evrazht2backend.kafka;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KafkaProducer {
    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServer;

}
