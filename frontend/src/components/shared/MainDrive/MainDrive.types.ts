import { StatusType } from '@services/types';

export interface IMainDriveData {
    value: number;
    type: MainDrivePropsItemType;
    status: StatusType;
}

export interface MainDriveProps {
    status: StatusType;
    mainDriveData: IMainDriveData[];
}

export enum MainDrivePropsItemType {
    Amperage = 0,
    MotorAmperage,
    RoterVoltage,
    StarterVoltage,
}