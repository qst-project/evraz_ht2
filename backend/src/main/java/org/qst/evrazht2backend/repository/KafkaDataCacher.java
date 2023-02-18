package org.qst.evrazht2backend.repository;

import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class KafkaDataCacher {
    ConcurrentHashMap<Integer, KafkaSinteringMachine> cache;
    String latestMoment = "";

    KafkaDataCacher() {
        cache = new ConcurrentHashMap<>();
    }

    public Map<Integer, KafkaSinteringMachine> getCache() {
        return cache;
    }

    public String getLatestMoment() {
        return latestMoment;
    }

    public void setLatestMoment(String latestMoment) {
        this.latestMoment = latestMoment;
    }
}
