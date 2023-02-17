package org.qst.evrazht2backend.service.kafka.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class KafkaBearing {
    Integer number;
    Normalized temperature;
    Normalized vibrationAxial;
    Normalized vibrationHorizontal;
    Normalized vibrationVertical;
}
