import { StatusType } from '@services/types';

export interface GasTemperatureProps {
    strokeColor: string | undefined;
    value: number;
    status: StatusType;
}

export interface GasTemperatureData {
    value: number;
    status: StatusType;
}

export interface GasTemperatureContainerProps {
    gasTemperatureData: GasTemperatureData;
}
