package org.qst.evrazht2backend.delegate;

import org.qst.evrazht2backend.controller.mappers.SinteringMachineToRest;
import org.qst.evrazht2backend.controller.model.RestSinteringMachine;
import org.qst.evrazht2backend.domain.usecase.GetAllSinteringMachinesUseCase;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GetAllSinteringMachinesDelegate {
    final GetAllSinteringMachinesUseCase getAllSinteringMachinesUseCase;
    final SinteringMachineToRest sinteringMachineToRest;

    public GetAllSinteringMachinesDelegate(GetAllSinteringMachinesUseCase getAllSinteringMachinesUseCase, SinteringMachineToRest sinteringMachineToRest) {
        this.getAllSinteringMachinesUseCase = getAllSinteringMachinesUseCase;
        this.sinteringMachineToRest = sinteringMachineToRest;
    }

    public List<RestSinteringMachine> getGetAllSinteringMachines() {
        return getAllSinteringMachinesUseCase.use().stream()
                .map(sinteringMachineToRest)
                .collect(Collectors.toList());
    }
}
