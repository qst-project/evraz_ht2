export enum StatusType {
    DEFAULT = 'DEFAULT',
    WARNING = 'WARNING',
    DANGER = 'DANGER',
}

export enum Characteristics {
    TEMPERATURE = 'temperature',
    OIL_LEVEL = 'oilLevel',
    VERTICAL = 'vibrationVertical',
    HORIZONTAL = 'vibrationHorizontal',
    AXIS = 'vibrationAxial',
    OIL_PRESSURE = 'OIL_PRESSURE',
    AMPERAGE = 'AMPERAGE',
    DRIVE_AMPERAGE = 'DRIVE_AMPERAGE',
    ROTOR_VOLTAGE = 'ROTOR_VOLTAGE',
    STARTER_VOLTAGE = 'STARTER_VOLTAGE',
    UNDERPRESSURE = 'UNDERPRESSURE',
    DUST_LEVEL = 'DUST_LEVEL',
}

export interface CharacteristicData {
    type: Characteristics,
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
    isActive: boolean,
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
}

export interface KafkaSinterMachine {
    number: number,
    exhausters: KafkaExhauster[],
    work: boolean,
}

export interface SinterMachinesResponse {
    machines: KafkaSinterMachine[],
}
