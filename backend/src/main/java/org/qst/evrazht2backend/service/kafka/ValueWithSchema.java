package org.qst.evrazht2backend.service.kafka;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data

@AllArgsConstructor
class ValueWithSchema {
    Object value;
    SchemaCsv schema;

    public Integer getSinteringMachineNumber() {
        return schema.sinmachineNumber;
    }
}