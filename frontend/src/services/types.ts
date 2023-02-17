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
    value: number,
    status: StatusType,
}

export interface BearingData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterData {
    id: number,
    isActive: boolean,
    name: string,
    rotorName: string,
    date: string,
    lastRotorReplacement: string,
    forecast: string,
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
}

export interface KafkaSinterMachine {
    number: number,
    exhausters: KafkaExhauster[],
}

export interface SinterMachinesResponse {
    moment: string,
    machines: KafkaSinterMachine[],
}
