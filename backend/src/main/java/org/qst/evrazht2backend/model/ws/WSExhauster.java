package org.qst.evrazht2backend.model.ws;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WSExhauster {
    public String name;
    public Integer number;
//    public String rotorName;
    public WSBearings bearings;
    public Double coolerOilTemperatureBefore;
    public Double coolerOilTemperatureAfter;
    public Double coolerWaterTemperatureBefore;
    public Double coolerWaterTemperatureAfter;
    public Double gasCollectorTemperatureBefore;
    public Double gasCollectorUnderPressureBefore;
    public Boolean gasValveClosed;
    public Boolean gasValveOpen;
    public Double gasValvePosition;
    public Double mainDriveRotorCurrent;
    public Double mainDriveRotorVoltage;
    public Double mainDriveStatorCurrent;
    public Double mainDriveStatorVoltage;
    public Double oilLevel;
    public Double oilPressure;
    public Boolean work;
}
