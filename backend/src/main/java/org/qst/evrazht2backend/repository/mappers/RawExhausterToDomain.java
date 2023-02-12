package org.qst.evrazht2backend.repository.mappers;

import org.qst.evrazht2backend.domain.model.Exhauster;
import org.qst.evrazht2backend.repository.model.RawExhauster;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class RawExhausterToDomain implements Function<RawExhauster, Exhauster> {
    @Override
    public Exhauster apply(RawExhauster rawExhauster) {
        return null;
    }
}
