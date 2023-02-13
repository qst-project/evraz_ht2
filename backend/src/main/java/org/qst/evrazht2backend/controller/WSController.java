package org.qst.evrazht2backend.controller;

import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.controller.model.rest.RestSinteringMachine;
import org.qst.evrazht2backend.delegate.GetAllSinteringMachinesDelegate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class WSController {
    public final GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate;

    public WSController(GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate) {
        this.getAllSinteringMachinesDelegate = getAllSinteringMachinesDelegate;
    }

    @MessageMapping("/hello")
    @SendTo("/topic/news")
    public List<RestSinteringMachine> broadcast(@Payload String message) {
        log.info("accepted websocket message\t" + message);
        List<RestSinteringMachine> getAllSinteringMachines = getAllSinteringMachinesDelegate.getGetAllSinteringMachines();
        return getAllSinteringMachines;
    }
}
