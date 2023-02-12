package org.qst.evrazht2backend.controller;

import org.qst.evrazht2backend.controller.model.rest.RestSinteringMachine;
import org.qst.evrazht2backend.delegate.GetAllSinteringMachinesDelegate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestControllerSinteringMachines {
    public final GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate;

    public RestControllerSinteringMachines(GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate) {
        this.getAllSinteringMachinesDelegate = getAllSinteringMachinesDelegate;
    }


    @GetMapping("/sintering_machines")
    List<RestSinteringMachine> sinteringMachineList() {
        return getAllSinteringMachinesDelegate.getGetAllSinteringMachines();
    }
}
