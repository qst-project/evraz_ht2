package org.qst.evrazht2backend.service;


import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Component
public class Formatter {
    DateTimeFormatter DATE_TIME_FORMATTER;

    public Formatter() {
        DATE_TIME_FORMATTER = DateTimeFormatter
                .ofPattern("yyyy-MM-dd")
                .withZone(ZoneId.systemDefault());
    }

    public String dateToString(Date date) {
        return DATE_TIME_FORMATTER.format(date.toInstant());
    }
}
