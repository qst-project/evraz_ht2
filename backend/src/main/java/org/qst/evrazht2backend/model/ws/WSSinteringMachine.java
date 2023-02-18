package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class WSSinteringMachine {
    Integer number;
    List<WSExhauster> exhausters;
}
