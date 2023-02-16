package org.qst.evrazht2backend.controller.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
public class WSBearings {
    List<WSBearing> warn;
    List<WSBearing> other;
}
