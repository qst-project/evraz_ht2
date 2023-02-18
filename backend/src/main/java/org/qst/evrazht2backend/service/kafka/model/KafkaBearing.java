package org.qst.evrazht2backend.service.kafka.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class KafkaBearing {
    Integer number;
    Double temperature;
    Double temperatureAlarmMax;
    Double temperatureAlarmMin;
    Double temperatureWarningMax;
    Double temperatureWarningMin;
    Double vibrationAxial;
    Double vibrationAxialAlarmMax;
    Double vibrationAxialAlarmMin;
    Double vibrationAxialWarningMax;
    Double vibrationAxialWarningMin;
    Double vibrationHorizontal;
    Double vibrationHorizontalAlarmMax;
    Double vibrationHorizontalAlarmMin;
    Double vibrationHorizontalWarningMax;
    Double vibrationHorizontalWarningMin;
    Double vibrationVertical;
    Double vibrationVerticalAlarmMax;
    Double vibrationVerticalAlarmMin;
    Double vibrationVerticalWarningMax;
    Double vibrationVerticalWarningMin;
}
