package org.qst.evrazht2backend.controller;

import org.qst.evrazht2backend.controller.model.WSSinteringMachine;
import org.qst.evrazht2backend.repository.KafkaDataCacher;
import org.qst.evrazht2backend.service.kafka.mapper.KafkaSinteringMachineToWS;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class WebRestController {
    final KafkaDataCacher kafkaDataCacher;
    final KafkaSinteringMachineToWS kafkaSinteringMachineToWS;

    public WebRestController(KafkaDataCacher kafkaDataCacher, KafkaSinteringMachineToWS kafkaSinteringMachineToWS) {
        this.kafkaDataCacher = kafkaDataCacher;
        this.kafkaSinteringMachineToWS = kafkaSinteringMachineToWS;
    }

    @GetMapping("/sin_machines")
    public List<WSSinteringMachine> machines() {
        return kafkaDataCacher.getCache().values().stream().map(kafkaSinteringMachineToWS).collect(Collectors.toList());
    }
}
