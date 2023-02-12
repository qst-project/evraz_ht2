package org.qst.evrazht2backend.controller.model.rest;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class RestSinteringMachine {
    String name;
    RestExhauster exhauster1;
    RestExhauster exhauster2;
    BigDecimal oil;
}
