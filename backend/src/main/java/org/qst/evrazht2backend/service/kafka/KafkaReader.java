package org.qst.evrazht2backend.service.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.MapType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.controller.WSController;
import org.qst.evrazht2backend.repository.InMemoryStorage;
import org.qst.evrazht2backend.repository.model.RawExhauster;
import org.qst.evrazht2backend.repository.model.RawSinteringMachine;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Collections;
import java.util.HashMap;

@Component
@Log4j2
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaReader {
    private final InMemoryStorage inMemoryStorage;

    final WSController wsController;

    public KafkaReader(InMemoryStorage inMemoryStorage, WSController wsController) {
        this.inMemoryStorage = inMemoryStorage;
        this.wsController = wsController;
    }

    @KafkaListener(topics = "test", groupId = "group1")
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
        wsController.sendUpdate(new SampleMessage(map.get("id"), new BigDecimal(map.get("temp")), Instant.parse(map.get("timestamp"))));
    }
}
