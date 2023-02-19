package org.qst.evrazht2backend.controller;

import jakarta.validation.constraints.NotNull;
import org.qst.evrazht2backend.repository.Notification;
import org.qst.evrazht2backend.repository.NotificationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController {
    final NotificationRepository notificationRepository;

    public NotificationController(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @GetMapping("/notifications")
    public Page<Notification> notifications(@NotNull final Pageable pageable) {
        return notificationRepository.findAll(pageable);
    }
}
