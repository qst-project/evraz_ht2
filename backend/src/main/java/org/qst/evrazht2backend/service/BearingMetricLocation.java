package org.qst.evrazht2backend.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BearingMetricLocation {
    Number sinMachineNumber;
    Number exhausterNumber;
    Number bearingNumber;
    String fieldName;
}
