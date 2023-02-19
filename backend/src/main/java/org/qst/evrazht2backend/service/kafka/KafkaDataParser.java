package org.qst.evrazht2backend.service.kafka;

import com.opencsv.bean.CsvToBeanBuilder;
import org.qst.evrazht2backend.model.TimestampedValue;
import org.qst.evrazht2backend.model.kafka.KafkaBearing;
import org.qst.evrazht2backend.model.kafka.KafkaExhauster;
import org.qst.evrazht2backend.model.kafka.KafkaSinteringMachine;
import org.qst.evrazht2backend.service.DataWarnsNotifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Supplier;
import java.util.stream.Collectors;

@Component
public class KafkaDataParser {
    Map<String, List<SchemaCsv>> schemaByCode;

    KafkaDataParser(@Value("${schema-path}") String schemaPath) throws FileNotFoundException {
        if (Objects.equals(schemaPath, "")) {
            schemaPath = KafkaDataParser.class.getClassLoader().getResource("schema.csv").getPath();
        }
        CsvToBeanBuilder<SchemaCsv> beanBuilder = new CsvToBeanBuilder<>(new InputStreamReader(new FileInputStream(schemaPath)));
        beanBuilder.withType(SchemaCsv.class);
        schemaByCode = beanBuilder.build().parse().stream()
                .peek(e -> e.setCode(e.getCode().replace("[", "\\["))) // formatting hack
                .collect(Collectors.groupingBy(e -> e.code));
    }

    public static void append(String moment, Map<Integer, KafkaSinteringMachine> machines, ValueWithSchema valueWithSchema) {
        Object value = valueWithSchema.getValue();
        if (value == null) {
            return;
        }
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
        Supplier<TimestampedValue<Double>> val_double = () -> new TimestampedValue<>(moment, (Double) value);
        Supplier<TimestampedValue<Boolean>> val_bool = () -> new TimestampedValue<>(moment, (Double) value == 1);
        if (valueWithSchema.getSchema().getBearingNumber() != null) {
            KafkaBearing bearing = exhauster.getBearings().computeIfAbsent(valueWithSchema.getSchema().getBearingNumber(), e -> {
                KafkaBearing newBearing = new KafkaBearing();
                newBearing.setNumber(valueWithSchema.getSchema().getBearingNumber());
                return newBearing;
            });
            switch (valueWithSchema.getSchema().measure) {
                case "bearing_temperature" -> bearing.setTemperature(val_double.get());
                case "bearing_temperature_alarm_max" -> bearing.setTemperatureAlarmMax(val_double.get());
                case "bearing_temperature_alarm_min" -> bearing.setTemperatureAlarmMin(val_double.get());
                case "bearing_temperature_warning_max" -> bearing.setTemperatureWarningMax(val_double.get());
                case "bearing_temperature_warning_min" -> bearing.setTemperatureWarningMin(val_double.get());
                case "bearing_vibration_axial" -> bearing.setVibrationAxial(val_double.get());
                case "bearing_vibration_axial_alarm_max" -> bearing.setVibrationAxialAlarmMax(val_double.get());
                case "bearing_vibration_axial_alarm_min" -> bearing.setVibrationAxialAlarmMin(val_double.get());
                case "bearing_vibration_axial_warning_max" -> bearing.setVibrationAxialWarningMax(val_double.get());
                case "bearing_vibration_axial_warning_min" -> bearing.setVibrationAxialWarningMin(val_double.get());
                case "bearing_vibration_horizontal" -> bearing.setVibrationHorizontal(val_double.get());
                case "bearing_vibration_horizontal_alarm_max" ->
                        bearing.setVibrationHorizontalAlarmMax(val_double.get());
                case "bearing_vibration_horizontal_alarm_min" ->
                        bearing.setVibrationHorizontalAlarmMin(val_double.get());
                case "bearing_vibration_horizontal_warning_max" ->
                        bearing.setVibrationHorizontalWarningMax(val_double.get());
                case "bearing_vibration_horizontal_warning_min" ->
                        bearing.setVibrationHorizontalWarningMin(val_double.get());
                case "bearing_vibration_vertical" -> bearing.setVibrationVertical(val_double.get());
                case "bearing_vibration_vertical_alarm_max" -> bearing.setVibrationVerticalAlarmMax(val_double.get());
                case "bearing_vibration_vertical_alarm_min" -> bearing.setVibrationVerticalAlarmMin(val_double.get());
                case "bearing_vibration_vertical_warning_max" ->
                        bearing.setVibrationVerticalWarningMax(val_double.get());
                case "bearing_vibration_vertical_warning_min" ->
                        bearing.setVibrationVerticalWarningMin(val_double.get());
            }
        }
        switch (valueWithSchema.getSchema().measure) {
            case "cooler_oil" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_after" -> exhauster.setCoolerOilTemperatureAfter(val_double.get());
                    case "temperature_before" -> exhauster.setCoolerOilTemperatureBefore(val_double.get());
                }
            }
            case "cooler_water" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_after" -> exhauster.setCoolerWaterTemperatureAfter(val_double.get());
                    case "temperature_before" -> exhauster.setCoolerWaterTemperatureBefore(val_double.get());
                }
            }
            case "gas" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "temperature_before" -> exhauster.setGasCollectorTemperatureBefore(val_double.get());
                    case "underpressure_before" -> exhauster.setGasCollectorUnderPressureBefore(val_double.get());
                }
            }
            case "valve_pos" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "gas_valve_closed" -> exhauster.setGasValveClosed(val_bool.get());
                    case "gas_valve_open" -> exhauster.setGasValveOpen(val_bool.get());
                    case "gas_valve_position" -> exhauster.setGasValvePosition(val_double.get());
                }
            }
            case "main_drive" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "rotor_current" -> exhauster.setMainDriveRotorCurrent(val_double.get());
                    case "rotor_voltage" -> exhauster.setMainDriveRotorVoltage(val_double.get());
                    case "stator_current" -> exhauster.setMainDriveStatorCurrent(val_double.get());
                    case "stator_voltage" -> exhauster.setMainDriveStatorVoltage(val_double.get());
                }
            }
            case "oil" -> {
                switch (valueWithSchema.getSchema().signal) {
                    case "oil_level" -> exhauster.setOilLevel(val_double.get());
                    case "oil_pressure" -> exhauster.setOilPressure(val_double.get());
                }
            }
            case "work" -> exhauster.setWork(val_bool.get());
        }
    }

    public void update(String moment, Map<Integer, KafkaSinteringMachine> storage, Map<String, Object> newData) {
        newData.entrySet().stream()
                .filter(e -> schemaByCode.containsKey(e.getKey()))
                .map(e -> new ValueWithSchema(e.getValue(), schemaByCode.get(e.getKey()).get(0)))
                .forEach(e -> append(moment, storage, e));
    }
}
