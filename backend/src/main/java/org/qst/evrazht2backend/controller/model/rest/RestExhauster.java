package org.qst.evrazht2backend.controller.model.rest;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class RestExhauster {
    String name;
    Integer rotorNumber;
    String date;
    List<RestBearing> bearingsWarn;
    List<RestBearing> bearingsCommon;
}
