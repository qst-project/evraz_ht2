package org.qst.evrazht2backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.qst.evrazht2backend.model.ws.WSSinteringMachine;

import java.util.List;

@Data
@AllArgsConstructor
public class SinteringMachineListResponse {
    String moment;
    List<WSSinteringMachine> machines;
}
