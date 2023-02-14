import { StatusType } from '@services/types';

export interface BearingProps {
    name: string;
    status: StatusType;
    bearingData: IBearingPropsItem[];
}

export interface IBearingPropsItem {
    value: number;
    type: BearingPropsItemType
    status: StatusType;
}

export enum BearingPropsItemType {
    Temperature = 0,
    Vertical,
    Horizontal,
    Axis,
}
