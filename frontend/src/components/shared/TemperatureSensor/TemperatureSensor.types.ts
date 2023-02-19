import { StatusType } from '@services/types';

export interface TemperatureSensorProps {
    status: StatusType;
    value: {
        value: number,
        moment: string,
    },
}
