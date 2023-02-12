package org.qst.evrazht2backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class SinteringMachine {
    String name;
    Exhauster exhauster1;
    Exhauster exhauster2;
    BigDecimal oil;

}
