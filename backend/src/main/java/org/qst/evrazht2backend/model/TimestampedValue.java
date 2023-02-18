package org.qst.evrazht2backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TimestampedValue<T> {
    String moment;
    T value;
}
