package org.qst.evrazht2backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;


public interface NotificationRepository extends CrudRepository<Notification, Long> {
    Page<Notification> findAll(Pageable pageable);
}
