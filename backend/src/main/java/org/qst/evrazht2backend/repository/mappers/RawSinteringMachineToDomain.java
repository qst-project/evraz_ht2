package org.qst.evrazht2backend.repository.mappers;

import org.qst.evrazht2backend.domain.model.Bearing;
import org.qst.evrazht2backend.domain.model.Exhauster;
import org.qst.evrazht2backend.domain.model.SinteringMachine;
import org.qst.evrazht2backend.repository.model.RawSinteringMachine;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.function.Function;

@Component
public class RawSinteringMachineToDomain implements Function<RawSinteringMachine, SinteringMachine> {
    @Override
    public SinteringMachine apply(RawSinteringMachine rawSinteringMachine) {
        Exhauster exhauster = new Exhauster(
                "1",
                2,
                new Date(2023, 1, 1),
                List.of(new Bearing("bearing nom", 1, BigDecimal.valueOf(36.6), BigDecimal.valueOf(32.6))),
                List.of(new Bearing("hi mom", 2, BigDecimal.valueOf(31.6), BigDecimal.valueOf(3))
                )
        );
        return new SinteringMachine(
                rawSinteringMachine.id,
                exhauster,
                exhauster,
                BigDecimal.valueOf(12)
        );
    }
}
