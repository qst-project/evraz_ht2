package org.qst.evrazht2backend.service.kafka.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class KafkaSinteringMachine {
    Integer number;
    List<KafkaExhauster> exhausters;
}
