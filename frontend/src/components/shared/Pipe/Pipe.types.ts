import { StatusType } from '@services/types';

export interface PipeProps {
    pipeData: IPipeData[];
}

export interface IPipeData {
    value: number;
    type: PipePropsItemDataType;
    status: StatusType;
}

export enum PipePropsItemDataType {
    GasTemperature = 0,
    Underpressure,
    DustLevel,
}
