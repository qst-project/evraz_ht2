package org.qst.evrazht2backend.mapper;

import org.qst.evrazht2backend.model.kafka.KafkaBearing;
import org.qst.evrazht2backend.model.ws.WSBearing;
import org.qst.evrazht2backend.model.ws.WSNormalized;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Stream;


@Component
public class KafkaBearingToWS implements Function<KafkaBearing, WSBearing> {
    @Override
    public WSBearing apply(KafkaBearing kafkaBearing) {
        WSNormalized temperature = new NormalizedToWS(kafkaBearing.getTemperature(), kafkaBearing.getTemperatureAlarmMax(), kafkaBearing.getTemperatureAlarmMin(), kafkaBearing.getTemperatureWarningMax(), kafkaBearing.getTemperatureWarningMin()).apply();
        WSNormalized vibrationAxial = new NormalizedToWS(kafkaBearing.getVibrationAxial(), kafkaBearing.getVibrationAxialAlarmMax(), kafkaBearing.getVibrationAxialAlarmMin(), kafkaBearing.getVibrationAxialWarningMax(), kafkaBearing.getVibrationAxialWarningMin()).apply();
        WSNormalized vibrationVertical = new NormalizedToWS(kafkaBearing.getVibrationVertical(), kafkaBearing.getVibrationVerticalAlarmMax(), kafkaBearing.getVibrationVerticalAlarmMin(), kafkaBearing.getVibrationVerticalWarningMax(), kafkaBearing.getVibrationVerticalWarningMin()).apply();
        WSNormalized vibrationHorizontal = new NormalizedToWS(kafkaBearing.getVibrationHorizontal(), kafkaBearing.getVibrationHorizontalAlarmMax(), kafkaBearing.getVibrationHorizontalAlarmMin(), kafkaBearing.getVibrationHorizontalWarningMax(), kafkaBearing.getVibrationHorizontalWarningMin()).apply();
        String status = StatusComparator.coalesce(temperature.getStatus(), vibrationAxial.getStatus(), vibrationVertical.getStatus(), vibrationHorizontal.getStatus());
        return new WSBearing(kafkaBearing.getNumber(), status, temperature, vibrationAxial, vibrationVertical, vibrationHorizontal);
    }
}
