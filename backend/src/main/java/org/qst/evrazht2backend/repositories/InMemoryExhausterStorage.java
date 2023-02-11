package org.qst.evrazht2backend.repositories;

import org.qst.evrazht2backend.model.raw.RawExhauster;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;

@Component
public class InMemoryExhausterStorage {
    private ConcurrentHashMap<String, RawExhauster> concurrentHashMap;

    InMemoryExhausterStorage() {
        concurrentHashMap = new ConcurrentHashMap<>(1000);
    }

    public RawExhauster get(String key) {
        return concurrentHashMap.get(key);
    }

    public void put(String id, RawExhauster exhauster) {
        concurrentHashMap.put(id, exhauster);
    }
}
