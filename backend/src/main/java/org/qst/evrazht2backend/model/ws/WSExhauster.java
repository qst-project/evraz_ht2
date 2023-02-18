package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.qst.evrazht2backend.model.TimestampedValue;

@Data
@AllArgsConstructor
public class WSExhauster {
    String name;
    Integer number;
    String status;
    WSBearings bearings;
    TimestampedValue<Double> coolerOilTemperatureBefore;
    TimestampedValue<Double> coolerOilTemperatureAfter;
    TimestampedValue<Double> coolerWaterTemperatureBefore;
    TimestampedValue<Double> coolerWaterTemperatureAfter;
    TimestampedValue<Double> gasCollectorTemperatureBefore;
    TimestampedValue<Double> gasCollectorUnderPressureBefore;
    TimestampedValue<Boolean> gasValveClosed;
    TimestampedValue<Boolean> gasValveOpen;
    TimestampedValue<Double> gasValvePosition;
    TimestampedValue<Double> mainDriveRotorCurrent;
    TimestampedValue<Double> mainDriveRotorVoltage;
    TimestampedValue<Double> mainDriveStatorCurrent;
    TimestampedValue<Double> mainDriveStatorVoltage;
    TimestampedValue<Double> oilLevel;
    TimestampedValue<Double> oilPressure;
    TimestampedValue<Boolean> work;
}
