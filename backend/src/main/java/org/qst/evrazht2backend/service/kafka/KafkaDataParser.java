package org.qst.evrazht2backend.service.kafka;

import org.qst.evrazht2backend.service.kafka.model.KafkaBearing;
import org.qst.evrazht2backend.service.kafka.model.KafkaExhauster;
import org.qst.evrazht2backend.service.kafka.model.KafkaSinteringMachine;
import org.qst.evrazht2backend.service.kafka.model.Normalized;

import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class KafkaDataParser {
    static public List<KafkaSinteringMachine> parse(Map<String, Object> data) {
        Function<String, Double> decimal = fieldName -> (Double) data.get(fieldName);
        return List.of(
                new KafkaSinteringMachine(
                        1,
                        List.of(
                                new KafkaExhauster(
                                        "У-171",
                                        1,
                                        "???",
                                        List.of(
                                                new KafkaBearing(
                                                        1,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[0:27]"),
                                                                decimal.apply("SM_Exgauster\\[0:63]"),
                                                                decimal.apply("SM_Exgauster\\[0:72]"),
                                                                decimal.apply("SM_Exgauster\\[0:81]"),
                                                                decimal.apply("SM_Exgauster\\[0:90]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[0:2]"),
                                                                decimal.apply("SM_Exgauster\\[0:137]"),
                                                                decimal.apply("SM_Exgauster\\[0:149]"),
                                                                decimal.apply("SM_Exgauster\\[0:161]"),
                                                                decimal.apply("SM_Exgauster\\[0:173]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[0:0]"),
                                                                decimal.apply("SM_Exgauster\\[0:135]"),
                                                                decimal.apply("SM_Exgauster\\[0:147]"),
                                                                decimal.apply("SM_Exgauster\\[0:159]"),
                                                                decimal.apply("SM_Exgauster\\[0:171]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[0:1]"),
                                                                decimal.apply("SM_Exgauster\\[0:136]"),
                                                                decimal.apply("SM_Exgauster\\[0:148]"),
                                                                decimal.apply("SM_Exgauster\\[0:160]"),
                                                                decimal.apply("SM_Exgauster\\[0:172]")
                                                        )
                                                ),
                                                new KafkaBearing(
                                                        2,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:28]"),
                                                                decimal.apply("SM_Exgauster\\[2:66]"),
                                                                decimal.apply("SM_Exgauster\\[2:75]"),
                                                                decimal.apply("SM_Exgauster\\[2:84]"),
                                                                decimal.apply("SM_Exgauster\\[2:93]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:5]"),
                                                                decimal.apply("SM_Exgauster\\[2:142]"),
                                                                decimal.apply("SM_Exgauster\\[2:154]"),
                                                                decimal.apply("SM_Exgauster\\[2:166]"),
                                                                decimal.apply("SM_Exgauster\\[2:178]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:3]"),
                                                                decimal.apply("SM_Exgauster\\[2:140]"),
                                                                decimal.apply("SM_Exgauster\\[2:152]"),
                                                                decimal.apply("SM_Exgauster\\[2:164]"),
                                                                decimal.apply("SM_Exgauster\\[2:176]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:4]"),
                                                                decimal.apply("SM_Exgauster\\[2:141]"),
                                                                decimal.apply("SM_Exgauster\\[2:153]"),
                                                                decimal.apply("SM_Exgauster\\[2:165]"),
                                                                decimal.apply("SM_Exgauster\\[2:177]")
                                                        )
                                                ),
                                                new KafkaBearing(
                                                        3,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:29]"),
                                                                decimal.apply("SM_Exgauster\\[2:67]"),
                                                                decimal.apply("SM_Exgauster\\[2:76]"),
                                                                decimal.apply("SM_Exgauster\\[2:85]"),
                                                                decimal.apply("SM_Exgauster\\[2:94]")
                                                        ),
                                                        null,
                                                        null,
                                                        null
                                                ),
                                                new KafkaBearing(
                                                        4,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:30]"),
                                                                decimal.apply("SM_Exgauster\\[2:68]"),
                                                                decimal.apply("SM_Exgauster\\[2:77]"),
                                                                decimal.apply("SM_Exgauster\\[2:86]"),
                                                                decimal.apply("SM_Exgauster\\[2:95]")
                                                        ),
                                                        null,
                                                        null,
                                                        null
                                                ),
                                                new KafkaBearing(
                                                        5,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:31]"),
                                                                decimal.apply("SM_Exgauster\\[2:69]"),
                                                                decimal.apply("SM_Exgauster\\[2:78]"),
                                                                decimal.apply("SM_Exgauster\\[2:87]"),
                                                                decimal.apply("SM_Exgauster\\[2:96]")
                                                        ),
                                                        null,
                                                        null,
                                                        null
                                                ),
                                                new KafkaBearing(
                                                        6,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:32]"),
                                                                decimal.apply("SM_Exgauster\\[2:70]"),
                                                                decimal.apply("SM_Exgauster\\[2:79]"),
                                                                decimal.apply("SM_Exgauster\\[2:88]"),
                                                                decimal.apply("SM_Exgauster\\[2:97]")
                                                        ),
                                                        null,
                                                        null,
                                                        null
                                                ),
                                                new KafkaBearing(
                                                        7,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:33]"),
                                                                decimal.apply("SM_Exgauster\\[2:71]"),
                                                                decimal.apply("SM_Exgauster\\[2:80]"),
                                                                decimal.apply("SM_Exgauster\\[2:89]"),
                                                                decimal.apply("SM_Exgauster\\[2:98]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:8]"),
                                                                decimal.apply("SM_Exgauster\\[2:145]"),
                                                                decimal.apply("SM_Exgauster\\[2:157]"),
                                                                decimal.apply("SM_Exgauster\\[2:169]"),
                                                                decimal.apply("SM_Exgauster\\[2:181]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:6]"),
                                                                decimal.apply("SM_Exgauster\\[2:143]"),
                                                                decimal.apply("SM_Exgauster\\[2:155]"),
                                                                decimal.apply("SM_Exgauster\\[2:167]"),
                                                                decimal.apply("SM_Exgauster\\[2:179]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:7]"),
                                                                decimal.apply("SM_Exgauster\\[2:144]"),
                                                                decimal.apply("SM_Exgauster\\[2:156]"),
                                                                decimal.apply("SM_Exgauster\\[2:168]"),
                                                                decimal.apply("SM_Exgauster\\[2:180]")
                                                        )
                                                ),
                                                new KafkaBearing(
                                                        8,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:34]"),
                                                                decimal.apply("SM_Exgauster\\[2:72]"),
                                                                decimal.apply("SM_Exgauster\\[2:81]"),
                                                                decimal.apply("SM_Exgauster\\[2:90]"),
                                                                decimal.apply("SM_Exgauster\\[2:99]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:11]"),
                                                                decimal.apply("SM_Exgauster\\[2:148]"),
                                                                decimal.apply("SM_Exgauster\\[2:160]"),
                                                                decimal.apply("SM_Exgauster\\[2:172]"),
                                                                decimal.apply("SM_Exgauster\\[2:184]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:9]"),
                                                                decimal.apply("SM_Exgauster\\[2:146]"),
                                                                decimal.apply("SM_Exgauster\\[2:158]"),
                                                                decimal.apply("SM_Exgauster\\[2:170]"),
                                                                decimal.apply("SM_Exgauster\\[2:182]")
                                                        ),
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:10]"),
                                                                decimal.apply("SM_Exgauster\\[2:147]"),
                                                                decimal.apply("SM_Exgauster\\[2:159]"),
                                                                decimal.apply("SM_Exgauster\\[2:171]"),
                                                                decimal.apply("SM_Exgauster\\[2:183]")
                                                        )
                                                ),
                                                new KafkaBearing(
                                                        8,
                                                        new Normalized(
                                                                decimal.apply("SM_Exgauster\\[2:34]"),
                                                                decimal.apply("SM_Exgauster\\[2:72]"),
                                                                decimal.apply("SM_Exgauster\\[2:81]"),
                                                                decimal.apply("SM_Exgauster\\[2:90]"),
                                                                decimal.apply("SM_Exgauster\\[2:99]")
                                                        ),
                                                        null,
                                                        null,
                                                        null
                                                )
                                        )

                                )
                        )
                )
        );

    }
}
