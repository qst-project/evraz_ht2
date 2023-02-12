package org.qst.evrazht2backend.domain.usecase;

import org.qst.evrazht2backend.domain.model.SinteringMachine;
import org.qst.evrazht2backend.repository.InMemoryStorage;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GetAllSinteringMachinesUseCase {
    private InMemoryStorage inMemoryStorage;

    public GetAllSinteringMachinesUseCase(InMemoryStorage inMemoryStorage) {
        this.inMemoryStorage = inMemoryStorage;
    }

    public List<SinteringMachine> use() {
        return inMemoryStorage.get();
    }
}
