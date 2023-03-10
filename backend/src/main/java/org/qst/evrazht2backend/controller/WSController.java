package org.qst.evrazht2backend.controller;

import lombok.extern.log4j.Log4j2;
import org.qst.evrazht2backend.model.SinteringMachineListResponse;
import org.qst.evrazht2backend.repository.Notification;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class WSController {

    private final SimpMessagingTemplate messagingTemplate;

    public WSController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

//    @MessageMapping("/hello")
//    @SendTo("/topic/news")
//    public List<RestSinteringMachine> broadcast(@Payload String message) {
//        log.info("accepted websocket message\t" + message);
//        List<RestSinteringMachine> getAllSinteringMachines = getAllSinteringMachinesDelegate.getGetAllSinteringMachines();
//        return getAllSinteringMachines;
//    }


    public void sendUpdateMachines(SinteringMachineListResponse sinteringMachineList) {
        messagingTemplate.convertAndSendToUser("1", "/queue/messages", sinteringMachineList);
    }
    public void sendUpdateNotification(Notification notification) {
        messagingTemplate.convertAndSendToUser("1", "/queue/notifications", notification);
    }
}
