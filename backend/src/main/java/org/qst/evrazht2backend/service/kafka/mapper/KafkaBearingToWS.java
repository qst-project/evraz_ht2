package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSBearing;
import org.qst.evrazht2backend.controller.model.WSNormalized;
import org.qst.evrazht2backend.service.kafka.model.KafkaBearing;
import org.springframework.stereotype.Component;

import java.util.function.Function;


@Component
public class KafkaBearingToWS implements Function<KafkaBearing, WSBearing> {

    @Override
    public WSBearing apply(KafkaBearing kafkaBearing) {
        WSNormalized temperature = new NormalizedToWS(kafkaBearing.getTemperature(), kafkaBearing.getTemperatureAlarmMax(), kafkaBearing.getTemperatureAlarmMin(), kafkaBearing.getTemperatureWarningMax(), kafkaBearing.getTemperatureWarningMin()).apply();
        WSNormalized vibrationAxial = new NormalizedToWS(kafkaBearing.getVibrationAxial(), kafkaBearing.getVibrationAxialAlarmMax(), kafkaBearing.getVibrationAxialAlarmMin(), kafkaBearing.getVibrationAxialWarningMax(), kafkaBearing.getVibrationAxialWarningMin()).apply();
        WSNormalized vibrationVertical = new NormalizedToWS(kafkaBearing.getVibrationVertical(), kafkaBearing.getVibrationVerticalAlarmMax(), kafkaBearing.getVibrationVerticalAlarmMin(), kafkaBearing.getVibrationVerticalWarningMax(), kafkaBearing.getVibrationVerticalWarningMin()).apply();
        WSNormalized vibrationHorizontal = new NormalizedToWS(kafkaBearing.getVibrationHorizontal(), kafkaBearing.getVibrationHorizontalAlarmMax(), kafkaBearing.getVibrationHorizontalAlarmMin(), kafkaBearing.getVibrationHorizontalWarningMax(), kafkaBearing.getVibrationHorizontalWarningMin()).apply();
        return new WSBearing(kafkaBearing.getNumber(), temperature, vibrationAxial, vibrationVertical, vibrationHorizontal);
    }
}
