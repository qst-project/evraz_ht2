import { CharacteristicData, StatusType } from '@services/types';

export interface BearingProps {
    name: string;
    status: StatusType,
    characteristics: CharacteristicData[];
}
