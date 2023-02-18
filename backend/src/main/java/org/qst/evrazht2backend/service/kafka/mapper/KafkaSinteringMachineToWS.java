package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSSinteringMachine;
import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;
import org.springframework.stereotype.Component;

import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class KafkaSinteringMachineToWS implements Function<KafkaSinteringMachine, WSSinteringMachine> {
    final KafkaExhausterToWS kafkaExhausterToWS;

    public KafkaSinteringMachineToWS(KafkaExhausterToWS kafkaExhausterToWS) {
        this.kafkaExhausterToWS = kafkaExhausterToWS;
    }

    @Override
    public WSSinteringMachine apply(KafkaSinteringMachine kafkaSinteringMachine) {
        return new WSSinteringMachine(
                kafkaSinteringMachine.getNumber(),
                kafkaSinteringMachine.getExhausters().values().stream().map(kafkaExhausterToWS).collect(Collectors.toList())
        );
    }
}
