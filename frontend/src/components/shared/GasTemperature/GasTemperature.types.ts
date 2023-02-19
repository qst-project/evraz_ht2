import { StatusType } from '@services/types';

export interface GasTemperatureProps {
    strokeColor: string | undefined;
    value: { value: number, moment: string, };
    status: StatusType;
}

export interface GasTemperatureData {
    value: number;
    moment: string,
    status: StatusType;
}

export interface GasTemperatureContainerProps {
    gasTemperatureData: GasTemperatureData;
}
