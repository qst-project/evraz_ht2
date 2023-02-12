package org.qst.evrazht2backend.service.kafka;

import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.repository.InMemoryStorage;
import org.qst.evrazht2backend.repository.model.RawExhauster;
import org.qst.evrazht2backend.repository.model.RawSinteringMachine;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
@Log4j2
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaReader {
    private final InMemoryStorage inMemoryStorage;

    public KafkaReader(InMemoryStorage inMemoryStorage) {
        this.inMemoryStorage = inMemoryStorage;
    }

    @KafkaListener(
            topics = "test",
            groupId = "group1",
            autoStartup = "${listen.auto.start:false}"
    )
    public void listener(String message) {
        RawExhauster rawExhauster = new RawExhauster();
        rawExhauster.rotorNumber = 1;
        rawExhauster.number = 1;
        rawExhauster.name = message;
        log.info("accepted a message\t" + message);
        RawSinteringMachine rawSinteringMachine = new RawSinteringMachine(message, rawExhauster, rawExhauster);
        inMemoryStorage.update(Collections.singletonList(rawSinteringMachine));
    }
}
