package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSBearing;
import org.qst.evrazht2backend.service.kafka.model.KafkaBearing;
import org.springframework.stereotype.Component;

import java.util.function.Function;


@Component
public class KafkaBearingToWS implements Function<KafkaBearing, WSBearing> {
    final
    NormalizedToWS normalizedToWS;

    public KafkaBearingToWS(NormalizedToWS normalizedToWS) {
        this.normalizedToWS = normalizedToWS;
    }

    @Override
    public WSBearing apply(KafkaBearing kafkaBearing) {
        return new WSBearing(
                kafkaBearing.getNumber(),
                normalizedToWS.apply(kafkaBearing.getTemperature()),
                normalizedToWS.apply(kafkaBearing.getVibrationAxial()),
                normalizedToWS.apply(kafkaBearing.getVibrationVertical()),
                normalizedToWS.apply(kafkaBearing.getVibrationHorizontal())
        );
    }
}
