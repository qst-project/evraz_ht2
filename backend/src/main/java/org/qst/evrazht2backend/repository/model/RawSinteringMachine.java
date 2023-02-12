package org.qst.evrazht2backend.repository.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RawSinteringMachine {
    public String id;
    public RawExhauster exhauster1;
    public RawExhauster exhauster2;
}
