import { StatusType } from '@services/types';

export interface OilPressureProps {
    strokeColor: string | undefined;
    value: number;
    status: StatusType;
}

export interface IOilPressureData {
    value: number;
    status: StatusType;
}

export interface OilPressureContainerProps {
    oilPressureData: IOilPressureData;
    style: any,
}
