package org.qst.evrazht2backend.service.kafka;

import com.opencsv.bean.CsvToBeanBuilder;
import org.qst.evrazht2backend.service.kafka.model.KafkaBearing;
import org.qst.evrazht2backend.service.kafka.model.KafkaExhauster;
import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class KafkaDataParser {
    Map<String, List<SchemaCsv>> schemaByCode;

    KafkaDataParser(@Value("${schema-path}") String schemaPath) throws FileNotFoundException {
        if (schemaPath == null) {
            schemaPath = KafkaDataParser.class.getClassLoader().getResource("schema.csv").getPath();
        }
        CsvToBeanBuilder<SchemaCsv> beanBuilder = new CsvToBeanBuilder<>(new InputStreamReader(new FileInputStream(schemaPath)));
        beanBuilder.withType(SchemaCsv.class);
        schemaByCode = beanBuilder.build().parse().stream()
                .peek(e -> e.setCode(e.getCode().replace("[", "\\["))) // formatting hack
                .collect(Collectors.groupingBy(e -> e.code));
    }

    public static void append(Map<Integer, KafkaSinteringMachine> machines, ValueWithSchema valueWithSchema) {
        KafkaSinteringMachine machine = machines.computeIfAbsent(valueWithSchema.getSinteringMachineNumber(), e -> {
            KafkaSinteringMachine sinteringMachine = new KafkaSinteringMachine();
            sinteringMachine.setNumber(valueWithSchema.getSinteringMachineNumber());
            return sinteringMachine;
        });
        KafkaExhauster exhauster = machine.getExhausters().computeIfAbsent(valueWithSchema.getSchema().getExhausterNumber(), e -> {
            KafkaExhauster res = new KafkaExhauster();
            res.setName(valueWithSchema.getSchema().getExhausterName());
            res.setNumber(valueWithSchema.getSchema().getExhausterNumber());
            return res;
        });
        Object value = valueWithSchema.getValue();
        if (valueWithSchema.getSchema().getBearingNumber() != null) {
            KafkaBearing bearing = exhauster.getBearings().computeIfAbsent(valueWithSchema.getSchema().getBearingNumber(), e -> {
                KafkaBearing newBearing = new KafkaBearing();
                newBearing.setNumber(valueWithSchema.getSchema().getBearingNumber());
                return newBearing;
            });
            switch (valueWithSchema.getSchema().measure) {
                case "bearing_temperature" -> bearing.setTemperature((Double) value);
                case "bearing_temperature_alarm_max" -> bearing.setTemperatureAlarmMax((Double) value);
                case "bearing_temperature_alarm_min" -> bearing.setTemperatureAlarmMin((Double) value);
                case "bearing_temperature_warning_max" -> bearing.setTemperatureWarningMax((Double) value);
                case "bearing_temperature_warning_min" -> bearing.setTemperatureWarningMin((Double) value);
                case "bearing_vibration_axial" -> bearing.setVibrationAxial((Double) value);
                case "bearing_vibration_axial_alarm_max" -> bearing.setVibrationAxialAlarmMax((Double) value);
                case "bearing_vibration_axial_alarm_min" -> bearing.setVibrationAxialAlarmMin((Double) value);
                case "bearing_vibration_axial_warning_max" -> bearing.setVibrationAxialWarningMax((Double) value);
                case "bearing_vibration_axial_warning_min" -> bearing.setVibrationAxialWarningMin((Double) value);
                case "bearing_vibration_horizontal" -> bearing.setVibrationHorizontal((Double) value);
                case "bearing_vibration_horizontal_alarm_max" -> bearing.setVibrationHorizontalAlarmMax((Double) value);
                case "bearing_vibration_horizontal_alarm_min" -> bearing.setVibrationHorizontalAlarmMin((Double) value);
                case "bearing_vibration_horizontal_warning_max" ->
                        bearing.setVibrationHorizontalWarningMax((Double) value);
                case "bearing_vibration_horizontal_warning_min" ->
                        bearing.setVibrationHorizontalWarningMin((Double) value);
                case "bearing_vibration_vertical" -> bearing.setVibrationVertical((Double) value);
                case "bearing_vibration_vertical_alarm_max" -> bearing.setVibrationVerticalAlarmMax((Double) value);
                case "bearing_vibration_vertical_alarm_min" -> bearing.setVibrationVerticalAlarmMin((Double) value);
                case "bearing_vibration_vertical_warning_max" -> bearing.setVibrationVerticalWarningMax((Double) value);
                case "bearing_vibration_vertical_warning_min" -> bearing.setVibrationVerticalWarningMin((Double) value);
            }
        }
        switch (valueWithSchema.getSchema().measure) {
            case "cooler_oil" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_after" -> exhauster.setCoolerOilTemperatureAfter((Double) value);
                    case "temperature_before" -> exhauster.setCoolerOilTemperatureBefore((Double) value);
                }
            }
            case "cooler_water" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_after" -> exhauster.setCoolerWaterTemperatureAfter((Double) value);
                    case "temperature_before" -> exhauster.setCoolerWaterTemperatureBefore((Double) value);
                }
            }
            case "gas" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_before" -> exhauster.setGasCollectorTemperatureBefore((Double) value);
                    case "underpressure_before" -> exhauster.setGasCollectorTemperatureAfter((Double) value);
                }
            }
            case "valve_pos" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "gas_valve_closed" -> exhauster.setGasValveClosed((Double) value == 1.0);
                    case "gas_valve_open" -> exhauster.setGasValveOpen((Double) value == 1.0);
                    case "gas_valve_position" -> exhauster.setGasValvePosition((Double) value);
                }
            }
            case "main_drive" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "rotor_current" -> exhauster.setMainDriveRotorCurrent((Double) value);
                    case "rotor_voltage" -> exhauster.setMainDriveRotorVoltage((Double) value);
                    case "stator_current" -> exhauster.setMainDriveStatorCurrent((Double) value);
                    case "stator_voltage" -> exhauster.setMainDriveStatorVoltage((Double) value);
                }
            }
            case "oil" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "oil_level" -> exhauster.setOilLevel((Double) value);
                    case "oil_pressure" -> exhauster.setOilPressure((Double) value);
                }
            }
            case "work" -> exhauster.setWork((Double) value == 1.0);
        }
    }

    public void update(Map<Integer, KafkaSinteringMachine> storage, Map<String, Object> newData) {
        newData.entrySet().stream()
                .filter(e -> schemaByCode.containsKey(e.getKey()))
                .map(e -> new ValueWithSchema(e.getValue(), schemaByCode.get(e.getKey()).get(0)))
                .forEach(e -> append(storage, e));
    }
}
