import { CharacteristicData, StatusType } from '@services/types';
import React from 'react';

export interface MainDriveProps {
    status: StatusType;
    characteristics: CharacteristicData[];
    style?: React.CSSProperties;
}
