package org.qst.evrazht2backend.mapper;

import org.qst.evrazht2backend.model.TimestampedValue;
import org.qst.evrazht2backend.model.ws.WSNormalized;


public class NormalizedToWS {
    TimestampedValue<Double> value;
    TimestampedValue<Double> alarmMax;
    TimestampedValue<Double> alarmMin;
    TimestampedValue<Double> warnMax;
    TimestampedValue<Double> warnMin;
    

    NormalizedToWS(TimestampedValue<Double> value, TimestampedValue<Double> alarmMax, TimestampedValue<Double> alarmMin, TimestampedValue<Double> warnMax, TimestampedValue<Double> warnMin) {
        this.value = value;
        this.alarmMax = alarmMax;
        this.alarmMin = alarmMin;
        this.warnMax = warnMax;
        this.warnMin = warnMin;
    }

    public boolean warn() {
        if (value == null || warnMin == null || warnMax == null) {
            return false;
        }
        return value.getValue() < warnMin.getValue() || value.getValue() > warnMax.getValue();
    }

    public boolean alarm() {
        if (value == null || warnMin == null || warnMax == null) {
            return false;
        }
        return value.getValue() < alarmMin.getValue() || value.getValue() > alarmMax.getValue();
    }

    public WSNormalized apply() {
        String status = null;
        if (warn()) {
            status = "warn";
        }
        if (alarm()) {
            status = "alarm";
        }
        return new WSNormalized(value, status);
    }
}
