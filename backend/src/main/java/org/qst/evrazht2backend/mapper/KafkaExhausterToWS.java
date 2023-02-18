package org.qst.evrazht2backend.mapper;

import org.qst.evrazht2backend.model.ws.WSBearing;
import org.qst.evrazht2backend.model.ws.WSBearings;
import org.qst.evrazht2backend.model.ws.WSExhauster;
import org.qst.evrazht2backend.model.kafka.KafkaExhauster;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Component
public class KafkaExhausterToWS implements Function<KafkaExhauster, WSExhauster> {
    final KafkaBearingToWS kafkaBearingToWS;

    public KafkaExhausterToWS(KafkaBearingToWS kafkaBearingToWS) {
        this.kafkaBearingToWS = kafkaBearingToWS;
    }

    @Override
    public WSExhauster apply(KafkaExhauster kafkaExhauster) {
        Predicate<WSBearing> isWarned = b -> Stream.of(
                b.getTemperature() != null ? b.getTemperature().getStatus() : null,
                b.getVibrationAxial() != null ? b.getVibrationAxial().getStatus() : null,
                b.getVibrationVertical() != null ? b.getVibrationVertical().getStatus() : null,
                b.getVibrationHorizontal() != null ? b.getVibrationHorizontal().getStatus() : null
        ).anyMatch(Objects::nonNull);
        Map<Boolean, List<WSBearing>> partitionedBearings = kafkaExhauster.getBearings().values().stream()
                .map(kafkaBearingToWS)
                .collect(Collectors.partitioningBy(isWarned));
        List<WSBearing> warn = partitionedBearings.get(true);
        List<WSBearing> other = partitionedBearings.get(false);
        return new WSExhauster(
                kafkaExhauster.getName(),
                kafkaExhauster.getNumber(),
                new WSBearings(warn, other),
                kafkaExhauster.getCoolerOilTemperatureBefore(),
                kafkaExhauster.getCoolerOilTemperatureAfter(),
                kafkaExhauster.getCoolerWaterTemperatureBefore(),
                kafkaExhauster.getCoolerWaterTemperatureAfter(),
                kafkaExhauster.getGasCollectorTemperatureBefore(),
                kafkaExhauster.getGasCollectorUnderPressureBefore(),
                kafkaExhauster.getGasValveClosed(),
                kafkaExhauster.getGasValveOpen(),
                kafkaExhauster.getGasValvePosition(),
                kafkaExhauster.getMainDriveRotorCurrent(),
                kafkaExhauster.getMainDriveRotorVoltage(),
                kafkaExhauster.getMainDriveStatorCurrent(),
                kafkaExhauster.getMainDriveStatorVoltage(),
                kafkaExhauster.getOilLevel(),
                kafkaExhauster.getOilPressure(),
                kafkaExhauster.getWork()
        );
    }
}
