import { StatusType } from '@services/types';
import React from 'react';

export interface PipeProps {
    temperature: number,
    underpressure: number,
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
