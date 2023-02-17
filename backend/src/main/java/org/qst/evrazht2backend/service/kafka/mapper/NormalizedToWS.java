package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSNormalized;
import org.qst.evrazht2backend.service.kafka.model.Normalized;
import org.springframework.stereotype.Component;

import java.util.function.Function;


@Component
public class NormalizedToWS implements Function<Normalized, WSNormalized> {

    @Override
    public WSNormalized apply(Normalized normalized) {
        boolean alarm = normalized.alarm();
        boolean warn = normalized.warn();
        String status = null;
        if (warn) {
            status = "warn";
        }
        if (alarm) {
            status = "alarm";
        }
        return new WSNormalized(normalized.getValue(), status);
    }
}
