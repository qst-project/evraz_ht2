import { StatusType } from '@services/types';
import React from 'react';

export interface PipeProps {
    style?: React.CSSProperties,
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
