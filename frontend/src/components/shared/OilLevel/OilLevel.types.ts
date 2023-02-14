import { StatusType } from '@services/types';

export interface IOilLevelData {
    value: number;
    status: StatusType;
}

export interface OilLevelProps {
    strokeColor: string | undefined;
    value: number;
}
