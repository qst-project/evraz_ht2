package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.qst.evrazht2backend.model.TimestampedValue;

@Data
@AllArgsConstructor
public class WSNormalized {
    TimestampedValue<Double> value;
    String status;
}
