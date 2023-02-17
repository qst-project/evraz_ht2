package org.qst.evrazht2backend.service.kafka.mapper;

import org.qst.evrazht2backend.controller.model.WSBearing;
import org.qst.evrazht2backend.controller.model.WSBearings;
import org.qst.evrazht2backend.controller.model.WSExhauster;
import org.qst.evrazht2backend.service.kafka.model.KafkaExhauster;
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
        Map<Boolean, List<WSBearing>> partitionedBearings = kafkaExhauster.getBearings().stream()
                .map(kafkaBearingToWS)
                .collect(Collectors.partitioningBy(isWarned));
        List<WSBearing> warn = partitionedBearings.get(true);
        List<WSBearing> other = partitionedBearings.get(false);
        return new WSExhauster(
                kafkaExhauster.getName(),
                kafkaExhauster.getNumber(),
                kafkaExhauster.getRotorName(),
                new WSBearings(warn, other)
        );
    }
}
