export enum StatusType {
    DEFAULT = 'DEFAULT',
    WARNING = 'WARNING',
    DANGER = 'DANGER',
}

export enum Characteristics {
    // подшипник
    TEMPERATURE = 'temperature',
    AXIS = 'vibration_axial',
    VERTICAL = 'vibration_vertical',
    HORIZONTAL = 'vibration_horizontal',
    // маслобак
    OIL_LEVEL = 'oil_level',
    OIL_PRESSURE = 'oil_pressure',
    // главный привод
    AMPERAGE = 'rotor_current',
    DRIVE_AMPERAGE = 'stator_current',
    ROTOR_VOLTAGE = 'rotor_voltage',
    STARTER_VOLTAGE = 'stator_voltage',
    // охладитель
    WATER_BEFORE = 'water_before',
    WATER_AFTER = 'water_after',
    OIL_BEFORE = 'oil_before',
    OIL_AFTER = 'oil_after',
    // газовый коллектор
    GAS_TEMPERATURE = 'temperature_before',
    UNDERPRESSURE = 'underpressure_before',
}

export enum CharacteristicsBackend {
    TEMPERATURE = 'temperature',
    OIL_LEVEL = 'oil_Level',
    VERTICAL = 'vibrationVertical',
    HORIZONTAL = 'vibrationHorizontal',
    AXIS = 'vibrationAxial',
    OIL_PRESSURE = 'oil_pressure',
    AMPERAGE = 'AMPERAGE',
    DRIVE_AMPERAGE = 'DRIVE_AMPERAGE',
    ROTOR_VOLTAGE = 'ROTOR_VOLTAGE',
    STARTER_VOLTAGE = 'STARTER_VOLTAGE',
    UNDERPRESSURE = 'UNDERPRESSURE',
    DUST_LEVEL = 'DUST_LEVEL',
    WATER_BEFORE = 'water_before',
    WATER_AFTER = 'water_after',
    OIL_BEFORE = 'oil_before',
    OIL_AFTER = 'oil_after',
    GAS_TEMPERATURE = 'GAS_TEMPERATURE',
}

export interface CharacteristicData {
    type: CharacteristicsBackend,
    value: { value: number | string, moment: string },
    status: StatusType,
}

export interface BearingData {
    number: number;
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterData {
    id: number,
    sinterMachineId: number;
    isActive: {
        value: boolean,
        moment: string,
    },
    name: string,
    rotorName: string,
    date: string,
    lastRotorReplacement: string,
    forecast: string,
    mainDriveCharacteristics: CharacteristicData[],
    oilLevel: {
        value: number,
        moment: string,
    },
    oilPressure: {
        value: number,
        moment: string,
    },
    coolerOilTemperatureAfter: {
        value: number,
        moment: string,
    },
    coolerOilTemperatureBefore: {
        value: number,
        moment: string,
    },
    coolerWaterTemperatureAfter: {
        value: number,
        moment: string,
    },
    coolerWaterTemperatureBefore: {
        value: number,
        moment: string,
    },
    gasCollectorUnderPressureBefore: {
        value: number,
        moment: string,
    },
    gasValveClosed: boolean,
    gasValveOpen: boolean,
    gasValvePosition: {
        value: number,
        moment: string,
    },
    gasCollectorTemperatureBefore: {
        value: number,
        moment: string,
    },
    bearings: BearingData[],
    problems: BearingData[],
}

export interface PredictionData {
    exhauster_name: string,
    number_machine: number,
    hours_to_failure: number,
    moment: string,
    precision: number,
}

export interface SinterMachineData {
    id: number,
    name: string,
    exhausters: ExhausterData[],
}

interface TrendsData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterTrends {
    bearings: TrendsData[],
    other: TrendsData[],
}

// FROM KAFKA

export interface KafkaCharacteristic {
    value: number,
    status: null | 'warn' | 'alarm',
}

export interface KafkaBearing {
    number: number,
    temperature: KafkaCharacteristic,
    vibrationAxial?: KafkaCharacteristic,
    vibrationVertical?: KafkaCharacteristic,
    vibrationHorizontal?: KafkaCharacteristic,
}

export interface KafkaExhauster {
    name: string,
    number: number,
    rotorName: string,
    bearings: {
        warn: KafkaBearing[],
        other: KafkaBearing[],
    },
    coolerOilTemperatureAfter: {
        value: number,
        moment: string,
    },
    coolerOilTemperatureBefore: {
        value: number,
        moment: string,
    },
    coolerWaterTemperatureAfter: {
        value: number,
        moment: string,
    },
    coolerWaterTemperatureBefore: {
        value: number,
        moment: string,
    },
    gasCollectorTemperatureBefore: {
        value: number,
        moment: string,
    },
    gasValveClosed: {
        value: boolean,
        moment: string,
    },
    gasValveOpen: {
        value: boolean,
        moment: string,
    },
    gasValvePosition: {
        value: number,
        moment: string,
    },
    mainDriveRotorCurrent: {
        value: number,
        moment: string,
    },
    mainDriveRotorVoltage: {
        value: number,
        moment: string,
    },
    mainDriveStatorCurrent: {
        value: number,
        moment: string,
    },
    mainDriveStatorVoltage: {
        value: number,
        moment: string,
    },
    gasCollectorUnderPressureBefore: {
        value: number,
        moment: string,
    },
    oilLevel: {
        value: number,
        moment: string,
    },
    oilPressure: {
        value: number,
        moment: string,
    },
    work: {
        value: boolean,
        moment: string,
    },
}

export interface KafkaSinterMachine {
    number: number,
    exhausters: KafkaExhauster[],
}

export interface SinterMachinesResponse {
    machines: KafkaSinterMachine[],
    moment: string,
}
