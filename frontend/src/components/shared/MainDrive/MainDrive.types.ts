import { CharacteristicData, StatusType } from '@services/types';

export interface MainDriveProps {
    status: StatusType;
    characteristics: CharacteristicData[];
}
