package org.qst.evrazht2backend.service.kafka.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class KafkaExhauster {
    String name;
    Integer number;
    Double coolerOilTemperatureBefore;
    Double coolerOilTemperatureAfter;
    Double coolerWaterTemperatureBefore;
    Double coolerWaterTemperatureAfter;
    Double gasCollectorTemperatureBefore;
    Double gasCollectorUnderPressureBefore;
    Boolean gasValveClosed;
    Boolean gasValveOpen;
    Double gasValvePosition;
    Double mainDriveRotorCurrent;
    Double mainDriveRotorVoltage;
    Double mainDriveStatorCurrent;
    Double mainDriveStatorVoltage;
    Double oilLevel;
    Double oilPressure;
    Boolean work;
    Map<Integer, KafkaBearing> bearings = new HashMap<>();
}
