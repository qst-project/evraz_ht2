import { StatusType } from '@services/types';

export interface IOilLevelData {
    value: { value: number, moment: string };
    status: StatusType;
}

export interface OilLevelProps {
    strokeColor: string | undefined;
    value: { value: number, moment: string };
}
