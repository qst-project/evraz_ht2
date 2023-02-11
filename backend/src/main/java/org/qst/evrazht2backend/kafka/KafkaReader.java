package org.qst.evrazht2backend.kafka;

import org.qst.evrazht2backend.repositories.InMemoryExhausterStorage;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaReader {
    private final InMemoryExhausterStorage inMemoryExhausterStorage;

    public KafkaReader(InMemoryExhausterStorage inMemoryExhausterStorage) {
        this.inMemoryExhausterStorage = inMemoryExhausterStorage;
    }

    @KafkaListener(topics = "test", groupId = "group1")
    public void listener(String message) {
//        RawExhauster rawExhauster = new RawExhauster();
//        inMemoryExhausterStorage.put(rawExhauster);
    }
}
