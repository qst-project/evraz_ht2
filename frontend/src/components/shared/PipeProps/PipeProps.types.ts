import { StatusType } from '@services/types'

export interface PipeProps {
    // pipePropsData: P
}

export interface IPipePropsData {
    status: StatusType;
    value: number;
}

export enum PipePropsItemType {
    Discharge = 0,
    DustLevel,
}
