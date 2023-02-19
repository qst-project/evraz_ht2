package org.qst.evrazht2backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TimestampedValue<T> {
    public String moment;
    public T value;
}
