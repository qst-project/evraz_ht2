package org.qst.evrazht2backend.repository;

import org.qst.evrazht2backend.domain.model.SinteringMachine;
import org.qst.evrazht2backend.repository.mappers.RawSinteringMachineToDomain;
import org.qst.evrazht2backend.repository.model.RawSinteringMachine;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class InMemoryStorage {
    private List<RawSinteringMachine> exhausters;
    final RawSinteringMachineToDomain rawSinteringMachineToDomain;

    InMemoryStorage(RawSinteringMachineToDomain rawSinteringMachineToDomain) {
        exhausters = new LinkedList<>();
        this.rawSinteringMachineToDomain = rawSinteringMachineToDomain;
    }

    public List<SinteringMachine> get() {
        return exhausters.stream().map(rawSinteringMachineToDomain).toList();
    }

    public void update(List<RawSinteringMachine> newExhausters) {
        exhausters = newExhausters;
    }
}
