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
    characteristics: {
        name: Characteristics,
        status: StatusType,
    }[],
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

export interface CharacteristicData {
    type: Characteristics,
    value: number,
    status: StatusType,
}

interface TrendsData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterTrends {
    bearings: TrendsData[],
    other: TrendsData[],
}
