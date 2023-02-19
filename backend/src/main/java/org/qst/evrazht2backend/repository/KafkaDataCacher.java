package org.qst.evrazht2backend.repository;

import org.qst.evrazht2backend.model.kafka.KafkaSinteringMachine;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class KafkaDataCacher {
    String moment;
    ConcurrentHashMap<Integer, KafkaSinteringMachine> cache;

    KafkaDataCacher() {
        cache = new ConcurrentHashMap<>();
    }

    public Map<Integer, KafkaSinteringMachine> getCache() {
        return cache;
    }

    public void setMoment(String moment) {
        this.moment = moment;
    }

    public String getMoment() {
        return moment;
    }
}
