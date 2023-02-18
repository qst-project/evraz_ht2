package org.qst.evrazht2backend.model.raw;

import java.time.Instant;
import java.util.List;

public class RawExhauster {
    public Integer rotorNumber;
    public Instant date; // ?
    public Integer number;
    public String name;

    public List<RawBearing> bearings;
}
