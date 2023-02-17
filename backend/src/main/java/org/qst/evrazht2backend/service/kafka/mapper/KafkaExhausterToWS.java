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


@Component
public class KafkaExhausterToWS implements Function<KafkaExhauster, WSExhauster> {
    final KafkaBearingToWS kafkaBearingToWS;

    public KafkaExhausterToWS(KafkaBearingToWS kafkaBearingToWS) {
        this.kafkaBearingToWS = kafkaBearingToWS;
    }

    @Override
    public WSExhauster apply(KafkaExhauster kafkaExhauster) {
        Predicate<List<String>> hasNonNullElement = strings -> strings.stream().anyMatch(Objects::nonNull);
        Predicate<WSBearing> isWarned = b -> hasNonNullElement.test(List.of(
                b.getTemperature().getStatus(),
                b.getVibrationAxial().getStatus(),
                b.getVibrationVertical().getStatus(),
                b.getVibrationHorizontal().getStatus()
        ));
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
