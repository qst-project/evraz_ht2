package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class WSBearings {
    List<WSBearing> warn;
    List<WSBearing> other;
}
