package org.qst.evrazht2backend.service.kafka;

import com.opencsv.bean.CsvBindByName;
import lombok.Data;

@Data
public class SchemaCsv {
    @CsvBindByName(column = "sinmachine_number", required = true)
    Integer sinmachineNumber;
    @CsvBindByName(column = "exhauster_number", required = true)
    Integer exhausterNumber;
    @CsvBindByName(column = "exhauster_name", required = true)
    String exhausterName;
    @CsvBindByName(column = "bearing_number")
    Integer bearingNumber;
    @CsvBindByName(column = "measure", required = true)
    String measure;
    @CsvBindByName(column = "signal", required = true)
    String signal;
    @CsvBindByName(column = "code", required = true)
    String code;
    @CsvBindByName(column = "description", required = true)
    String description;
    @CsvBindByName(column = "type", required = true)
    String type;
    @CsvBindByName(column = "activity", required = true)
    String activity;
}
