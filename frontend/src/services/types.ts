export interface IBearingPropsItem {
  value: number;
  type: BearingPropsItemType
  status: StatusType;
}

export interface IOilLevelData {
  value: number;
  status: StatusType;
}

export interface IOilPressureData {
  value: number;
  status: StatusType;
}

export interface IMainDriveData {
  value: number;
  type: MainDrivePropsItemType;
  status: StatusType;
}

export enum MainDrivePropsItemType {
  Amperage = 0,
  MotorAmperage,
  RoterVoltage,
  StarterVoltage,
}

export enum BearingPropsItemType {
  Temperature = 0,
  Vertical,
  Horizontal,
  Axis,
}

export enum StatusType {
  Default = 0,
  Warning,
  Danger,
}

export enum Characteristics {
  TEMPERATURE = 'TEMPERATURE',
  OIL_LEVEL = 'OIL_LEVEL',
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
