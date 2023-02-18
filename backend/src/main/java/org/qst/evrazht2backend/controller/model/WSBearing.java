package org.qst.evrazht2backend.controller.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class WSBearing {
    Integer number;
    WSNormalized temperature;
    WSNormalized vibrationAxial;
    WSNormalized vibrationVertical;
    WSNormalized vibrationHorizontal;
}
