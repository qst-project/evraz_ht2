package org.qst.evrazht2backend.model.kafka;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class KafkaSinteringMachine {
    Integer number;
    Map<Integer, KafkaExhauster> exhausters = new HashMap<>();
}
