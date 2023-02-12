package org.qst.evrazht2backend.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WSController {
    @MessageMapping("/hello")
    @SendTo("/topic/news")
    public String broadcast(@Payload String message) {
        return message;
    }
}
