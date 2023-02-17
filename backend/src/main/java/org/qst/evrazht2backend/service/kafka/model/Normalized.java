package org.qst.evrazht2backend.service.kafka.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Normalized {
    Double value;
    Double alarmMax;
    Double alarmMin;
    Double warnMax;
    Double warnMin;

     public boolean warn() {
          return value < warnMin || value > warnMax;
     }
     public boolean alarm() {
          return value < alarmMin || value > alarmMax;
     }
}
