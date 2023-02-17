package org.qst.evrazht2backend.controller.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WSExhauster {
    String name;
    Integer number;
    String rotorName;
    WSBearings bearings;
}
