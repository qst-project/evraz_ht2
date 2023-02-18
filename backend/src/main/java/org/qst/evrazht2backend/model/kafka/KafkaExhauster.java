package org.qst.evrazht2backend.model.kafka;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.qst.evrazht2backend.model.TimestampedValue;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class KafkaExhauster {
    String name;
    Integer number;
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
    Map<Integer, KafkaBearing> bearings = new HashMap<>();
}
