package org.qst.evrazht2backend;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.qst.evrazht2backend.controller.WSController;
import org.qst.evrazht2backend.mapper.KafkaSinteringMachineToWS;
import org.qst.evrazht2backend.model.SinteringMachineListResponse;
import org.qst.evrazht2backend.model.ws.WSSinteringMachine;
import org.qst.evrazht2backend.repository.KafkaDataCacher;
import org.qst.evrazht2backend.service.DataWarnsNotifier;
import org.qst.evrazht2backend.service.kafka.KafkaDataParser;
import org.qst.evrazht2backend.service.kafka.KafkaReader;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@EnableScheduling
@ConditionalOnProperty(value = "kafka.enable", havingValue = "true")
public class KafkaDataHandler {

    final WSController wsController;

    final KafkaSinteringMachineToWS kafkaSinteringMachineToWS;

    final KafkaDataParser kafkaDataParser;

    final KafkaDataCacher kafkaDataCacher;

    final DataWarnsNotifier dataWarnsNotifier;
    final KafkaReader kafkaReader;

    public KafkaDataHandler(WSController wsController, KafkaSinteringMachineToWS kafkaSinteringMachineToWS, KafkaDataParser kafkaDataParser, KafkaDataCacher kafkaDataCacher, DataWarnsNotifier dataWarnsNotifier, KafkaReader kafkaReader) {
        this.wsController = wsController;
        this.kafkaSinteringMachineToWS = kafkaSinteringMachineToWS;
        this.kafkaDataParser = kafkaDataParser;
        this.kafkaDataCacher = kafkaDataCacher;
        this.dataWarnsNotifier = dataWarnsNotifier;
        this.kafkaReader = kafkaReader;
    }


    @Scheduled(fixedRate = 500)
    private void handle() {
        List<String> messages = kafkaReader.pollMessages();
        messages.stream().map(message -> {
            try {
                return new ObjectMapper().readValue(message, HashMap.class);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }).forEach(data -> {
            String moment = data.get("moment").toString();
            kafkaDataParser.update(moment, kafkaDataCacher.getCache(), data);
            kafkaDataCacher.setMoment(moment);
        });
        kafkaDataCacher.getCache().values().forEach(dataWarnsNotifier::checkMachine);
        sendCacheToWS();
    }

    private void sendCacheToWS() {
        List<WSSinteringMachine> wsSinteringMachines = kafkaDataCacher.getCache().values().stream().map(kafkaSinteringMachineToWS).collect(Collectors.toList());
        SinteringMachineListResponse response = new SinteringMachineListResponse(wsSinteringMachines);
        wsController.sendUpdateMachines(response);
    }
}
