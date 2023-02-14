package org.qst.evrazht2backend.controller;

import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.controller.model.rest.RestSinteringMachine;
import org.qst.evrazht2backend.delegate.GetAllSinteringMachinesDelegate;
import org.qst.evrazht2backend.service.kafka.SampleMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class WSController {
    public final GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate;

    private final SimpMessagingTemplate messagingTemplate;

    public WSController(GetAllSinteringMachinesDelegate getAllSinteringMachinesDelegate, SimpMessagingTemplate messagingTemplate) {
        this.getAllSinteringMachinesDelegate = getAllSinteringMachinesDelegate;
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/hello")
    @SendTo("/topic/news")
    public List<RestSinteringMachine> broadcast(@Payload String message) {
        log.info("accepted websocket message\t" + message);
        List<RestSinteringMachine> getAllSinteringMachines = getAllSinteringMachinesDelegate.getGetAllSinteringMachines();
        return getAllSinteringMachines;
    }


    public void sendUpdate(SampleMessage sampleMessage) {
        messagingTemplate.convertAndSendToUser("1", "/queue/messages", sampleMessage);
    }
}
