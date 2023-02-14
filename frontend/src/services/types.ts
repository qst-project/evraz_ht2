export enum StatusType {
    Default = 0,
    Warning,
    Danger,
}

export enum Characteristics {
    TEMPERATURE = 'TEMPERATURE',
    OIL_LEVEL = 'OIL_LEVEL',
    VERTICAL = 'VERTICAL',
    HORIZONTAL = 'HORIZONTAL',
    AXIS = 'AXIS',
    OIL_PRESSURE = 'OIL_PRESSURE',
    AMPERAGE = 'AMPERAGE',
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

interface CharacteristicData {
    name: Characteristics,
    value: number,
}

interface TrendsData {
    name: string,
    characteristics: CharacteristicData[],
}

export interface ExhausterTrends {
    bearings: TrendsData[],
    other: TrendsData[],
}
