package org.qst.evrazht2backend.controller.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;

import java.util.List;

@Data
@AllArgsConstructor
public class WSSinteringMachineListResponse {
    String moment;
    List<WSSinteringMachine> machines;
}
