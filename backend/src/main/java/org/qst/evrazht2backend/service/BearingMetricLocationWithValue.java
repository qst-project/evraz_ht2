package org.qst.evrazht2backend.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BearingMetricLocationWithValue {
    BearingMetricLocation location;
    double value;
}
