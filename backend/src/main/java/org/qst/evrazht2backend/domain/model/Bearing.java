package org.qst.evrazht2backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class Bearing {
    String name;
    Integer number;
    BigDecimal temperature;
    BigDecimal vibration;
}
