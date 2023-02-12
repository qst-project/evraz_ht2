package org.qst.evrazht2backend.service.kafka;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@AllArgsConstructor
public class SampleMessage {
    String id;
    BigDecimal temp;
    Instant timestamp;
}
