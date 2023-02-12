package org.qst.evrazht2backend.services.kafka;

import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.domain.raw.RawExhauster;
import org.qst.evrazht2backend.repositories.InMemoryExhausterStorage;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
@Log4j2
public class KafkaReader {
    private final InMemoryExhausterStorage inMemoryExhausterStorage;

    public KafkaReader(InMemoryExhausterStorage inMemoryExhausterStorage) {
        this.inMemoryExhausterStorage = inMemoryExhausterStorage;
    }

    @KafkaListener(topics = "test", groupId = "group1")
    public void listener(String message) {
        RawExhauster rawExhauster = new RawExhauster();
        rawExhauster.rotorNumber = 1;
        rawExhauster.number = 1;
        rawExhauster.name = "test";
        log.info("accepted a message\t" + message);

        inMemoryExhausterStorage.update(Collections.singletonList(rawExhauster));
    }
}
