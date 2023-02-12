package org.qst.evrazht2backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class Exhauster {
    String name;
    Integer rotorNumber;
    Date date;
    List<Bearing> bearingsWarn;
    List<Bearing> bearingsCommon;
}
