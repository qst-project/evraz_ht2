package org.qst.evrazht2backend.model.kafka;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.qst.evrazht2backend.model.TimestampedValue;

@Data
@NoArgsConstructor
public class KafkaBearing {
    Integer number;
    TimestampedValue<Double> temperature;
    TimestampedValue<Double> temperatureAlarmMax;
    TimestampedValue<Double> temperatureAlarmMin;
    TimestampedValue<Double> temperatureWarningMax;
    TimestampedValue<Double> temperatureWarningMin;
    TimestampedValue<Double> vibrationAxial;
    TimestampedValue<Double> vibrationAxialAlarmMax;
    TimestampedValue<Double> vibrationAxialAlarmMin;
    TimestampedValue<Double> vibrationAxialWarningMax;
    TimestampedValue<Double> vibrationAxialWarningMin;
    TimestampedValue<Double> vibrationHorizontal;
    TimestampedValue<Double> vibrationHorizontalAlarmMax;
    TimestampedValue<Double> vibrationHorizontalAlarmMin;
    TimestampedValue<Double> vibrationHorizontalWarningMax;
    TimestampedValue<Double> vibrationHorizontalWarningMin;
    TimestampedValue<Double> vibrationVertical;
    TimestampedValue<Double> vibrationVerticalAlarmMax;
    TimestampedValue<Double> vibrationVerticalAlarmMin;
    TimestampedValue<Double> vibrationVerticalWarningMax;
    TimestampedValue<Double> vibrationVerticalWarningMin;
}
