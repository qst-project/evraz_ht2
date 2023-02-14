package org.qst.evrazht2backend.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Component
public class Formatter {
    DateTimeFormatter DATE_TIME_FORMATTER;
    final ObjectMapper mapper;

    public Formatter() {
        DATE_TIME_FORMATTER = DateTimeFormatter
                .ofPattern("yyyy-MM-dd")
                .withZone(ZoneId.systemDefault());
        mapper = new ObjectMapper();
        JavaTimeModule module = new JavaTimeModule();
        mapper.registerModule(module);
    }

    public String dateToString(Date date) {
        return DATE_TIME_FORMATTER.format(date.toInstant());
    }

    public String instantToString(Date date) {
        return DATE_TIME_FORMATTER.format(date.toInstant());
    }

    public Instant stringToInstant(String string) {
        return Instant.parse(string);
    }

    @Bean
    public ObjectMapper getMapper() {
        return mapper;
    }
}
