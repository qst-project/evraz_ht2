package org.qst.evrazht2backend.repositories;

import org.qst.evrazht2backend.domain.raw.RawExhauster;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class InMemoryExhausterStorage {
    private List<RawExhauster> exhausters;

    InMemoryExhausterStorage() {
        exhausters = new LinkedList<>();
    }

    public List<RawExhauster> get() {
        return exhausters;
    }

    public void update(List<RawExhauster> newExhausters) {
        exhausters = newExhausters;
    }
}
