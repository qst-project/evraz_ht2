package org.qst.evrazht2backend.repository.model;

import java.util.Date;
import java.util.List;

public class RawExhauster {
    public Integer rotorNumber;
    public Date date; // ?
    public Integer number;
    public String name;

    public List<RawBearing> bearings;
}
