package org.qst.evrazht2backend.controller.model.rest;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class RestBearing {
    String name;
    Integer number;
    BigDecimal temperature;
    BigDecimal vibration;
}
