package org.qst.evrazht2backend.controller.mappers;

import org.qst.evrazht2backend.controller.model.RestBearing;
import org.qst.evrazht2backend.controller.model.RestExhauster;
import org.qst.evrazht2backend.controller.model.RestSinteringMachine;
import org.qst.evrazht2backend.domain.model.SinteringMachine;
import org.qst.evrazht2backend.service.Formatter;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.function.Function;

@Component
public class SinteringMachineToRest implements Function<SinteringMachine, RestSinteringMachine> {
    final Formatter formatter;

    public SinteringMachineToRest(Formatter formatter) {
        this.formatter = formatter;
    }

    @Override
    public RestSinteringMachine apply(SinteringMachine sinteringMachine) {
        RestExhauster restExhauster = new RestExhauster(
                "1",
                2,
                formatter.dateToString(new Date(2023, 1, 1)),
                List.of(new RestBearing("bearing nom", 1, BigDecimal.valueOf(36.6), BigDecimal.valueOf(32.6))),
                List.of(new RestBearing("hi mom", 2, BigDecimal.valueOf(31.6), BigDecimal.valueOf(3))
                )
        );
        return new RestSinteringMachine(
                sinteringMachine.getName(),
                restExhauster,
                restExhauster,
                sinteringMachine.getOil()
        );
    }
}
