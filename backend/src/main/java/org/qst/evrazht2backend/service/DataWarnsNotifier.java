package org.qst.evrazht2backend.service;

import org.qst.evrazht2backend.controller.WSController;
import org.qst.evrazht2backend.model.TimestampedValue;
import org.qst.evrazht2backend.model.kafka.KafkaBearing;
import org.qst.evrazht2backend.model.kafka.KafkaExhauster;
import org.qst.evrazht2backend.model.kafka.KafkaSinteringMachine;
import org.qst.evrazht2backend.repository.Notification;
import org.qst.evrazht2backend.repository.NotificationRepository;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class DataWarnsNotifier {
    final NotificationRepository notificationRepository;
    Map<BearingMetricLocation, Double> lastValues;
    final WSController wsController;

    public DataWarnsNotifier(NotificationRepository notificationRepository, WSController wsController) {
        this.notificationRepository = notificationRepository;
        this.wsController = wsController;
        lastValues = new HashMap<>();
    }

    static boolean fits(double value, Limits limits) {
        return limits.min <= value && value <= limits.max;
    }

    public void check(TimestampedValue<Double> newValue, String type, Limits limits, BearingMetricLocation location) {
        Double oldValue = lastValues.computeIfAbsent(location, e -> newValue.getValue());
//        if (fits(oldValue, limits)) {
//            return;
//        }
//        if (fits(newValue.getValue(), limits)) {
//            return;
//        }
        Notification notification = new Notification();
        notification.sinMachineNumber = location.sinMachineNumber;
        notification.exhausterNumber = location.exhausterNumber;
        notification.bearingNumber = location.bearingNumber;
        notification.fieldName = location.fieldName;
        notification.type = type;
        notification.moment = newValue.moment;
        notificationRepository.save(notification);
        wsController.sendUpdateNotification(notification);
    }

    public void checkMachine(KafkaSinteringMachine machine) {
        Collection<KafkaExhauster> exhausters = machine.getExhausters().values();
        for (KafkaExhauster exhauster : exhausters) {
            for (KafkaBearing b : exhauster.getBearings().values()) {
                Function<String, Limits> limitsWarn = name -> switch (name) {
                    case "temperature" ->
                            new Limits(b.getTemperatureWarningMin().getValue(), b.getTemperatureWarningMax().getValue());
                    case "axialVibration" ->
                            new Limits(b.getVibrationAxialWarningMin().getValue(), b.getVibrationAxialWarningMax().getValue());
                    case "vibrationHorizontal" ->
                            new Limits(b.getVibrationHorizontalWarningMin().getValue(), b.getVibrationHorizontalWarningMax().getValue());
                    case "vibrationVertical" ->
                            new Limits(b.getVibrationVerticalWarningMin().getValue(), b.getVibrationVerticalWarningMax().getValue());
                    default -> throw new RuntimeException("unknown data type");
                };
                Function<String, Limits> limitsAlarm = name -> switch (name) {
                    case "temperature" ->
                            new Limits(b.getTemperatureAlarmMin().getValue(), b.getTemperatureAlarmMax().getValue());
                    case "axialVibration" ->
                            new Limits(b.getVibrationAxialAlarmMin().getValue(), b.getVibrationAxialAlarmMax().getValue());
                    case "vibrationHorizontal" ->
                            new Limits(b.getVibrationHorizontalAlarmMin().getValue(), b.getVibrationHorizontalAlarmMax().getValue());
                    case "vibrationVertical" ->
                            new Limits(b.getVibrationVerticalAlarmMin().getValue(), b.getVibrationVerticalAlarmMax().getValue());
                    default -> throw new RuntimeException("unknown data type");
                };
                HashMap<BearingMetricLocation, TimestampedValue<Double>> map = new HashMap<>();
                if (b.getTemperature() != null) {
                    map.put(new BearingMetricLocation(machine.getNumber(), exhauster.getNumber(), b.getNumber(), "temperature"), b.getTemperature());
                }
                if (b.getVibrationAxial() != null) {
                    map.put(new BearingMetricLocation(machine.getNumber(), exhauster.getNumber(), b.getNumber(), "axialVibration"), b.getVibrationAxial());
                }
                if (b.getVibrationHorizontal() != null) {
                    map.put(new BearingMetricLocation(machine.getNumber(), exhauster.getNumber(), b.getNumber(), "axialVibration"), b.getVibrationHorizontal());
                }
                if (b.getVibrationVertical() != null) {
                    map.put(new BearingMetricLocation(machine.getNumber(), exhauster.getNumber(), b.getNumber(), "axialVibration"), b.getVibrationVertical());
                }
                map.entrySet().stream()
                        .peek(p -> {
                            try {
                                Limits limits = limitsWarn.apply(p.getKey().fieldName);
                                check(p.getValue(), "warn", limits, p.getKey());
                            } catch (Exception ignored) {
                            }
                        })
                        .forEach(p -> {
                            try {
                                Limits limits = limitsAlarm.apply(p.getKey().fieldName);
                                check(p.getValue(), "alarm", limits, p.getKey());
                            } catch (Exception ignored) {
                            }
                        });
            }
        }
    }

}
