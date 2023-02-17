export enum StatusType {
    DEFAULT = 'DEFAULT',
    WARNING = 'WARNING',
    DANGER = 'DANGER',
}

export enum Characteristics {
    TEMPERATURE = 'TEMPERATURE',
    OIL_LEVEL = 'OIL_LEVEL',
    VERTICAL = 'VERTICAL',
    HORIZONTAL = 'HORIZONTAL',
    AXIS = 'AXIS',
    OIL_PRESSURE = 'OIL_PRESSURE',
    AMPERAGE = 'AMPERAGE',
    DRIVE_AMPERAGE = 'DRIVE_AMPERAGE',
    ROTOR_VOLTAGE = 'ROTOR_VOLTAGE',
    STARTER_VOLTAGE = 'STARTER_VOLTAGE',
    UNDERPRESSURE = 'UNDERPRESSURE',
    DUST_LEVEL = 'DUST_LEVEL',
}

export interface BearingData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterData {
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
    name: string,
    exhausters: ExhausterData[],
}

export interface CharacteristicData {
    name: Characteristics,
    value: number,
    status: StatusType,
}

function characteristicDataFromKafka(
    characteristicKafka: Characteristic,
    characteristicType: Characteristics,
): CharacteristicData {
    const characteristicData: CharacteristicData = {
        name: characteristicType,
        status: characteristicKafka.status,
        value: characteristicKafka.value,
    }
    return characteristicData
}

interface TrendsData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterTrends {
    bearings: TrendsData[],
    other: TrendsData[]
}

// function fromKafkaBearing(kafkaBearing: KafkaBearing):BearingData {
//     // const bearingData: BearingData = {
//     //     // name: ,
//     //     characteristics: [],
//     // }
//     return bearingData
// }

/// /////////////////////////////////////////////////////////

interface Characteristic {
    status: StatusType,
    value: number,
}

interface KafkaBearing {
    temperature: Characteristic,
    vibrationAxial: Characteristic,
    vibrationHorizontal: Characteristic,
    vibrationVertical: Characteristic,
}

interface KafkaBearingList {
    warn: KafkaBearing[],
    other: KafkaBearing[],
}

interface KafkaExhauster {
    name: string,
    number: string,
    rotorName: string,
    bearings: KafkaBearingList,
}

export interface KafkaSinteringMachine {
    number: number;
    exhausters: KafkaExhauster[];
}

export interface KafkaMessage {
    moment: string,
    machines: KafkaSinteringMachine[],
}
