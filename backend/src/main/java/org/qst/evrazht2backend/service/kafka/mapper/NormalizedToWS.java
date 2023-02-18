package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSNormalized;


public class NormalizedToWS {
    Double value;
    Double alarmMax;
    Double alarmMin;
    Double warnMax;
    Double warnMin;

    NormalizedToWS(Double value, Double alarmMax, Double alarmMin, Double warnMax, Double warnMin) {
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
        return value < warnMin || value > warnMax;
    }

    public boolean alarm() {
        if (value == null || warnMin == null || warnMax == null) {
            return false;
        }
        return value < alarmMin || value > alarmMax;
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
