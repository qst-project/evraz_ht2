import { StatusType } from '@services/types';

export interface OilPressureProps {
    strokeColor: string | undefined;
    value: {
        value: number,
        moment: string,
    };
    status: StatusType;
}

export interface IOilPressureData {
    value: {
        value: number,
        moment: string,
    };
    status: StatusType;
}

export interface OilPressureContainerProps {
    oilPressureData: IOilPressureData;
    style: any,
}
