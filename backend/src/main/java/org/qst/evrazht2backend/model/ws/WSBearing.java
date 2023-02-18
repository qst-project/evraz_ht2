package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WSBearing {
    Integer number;
    String status;
    WSNormalized temperature;
    WSNormalized vibrationAxial;
    WSNormalized vibrationVertical;
    WSNormalized vibrationHorizontal;
}
