import { CharacteristicData, StatusType } from '@services/types';
import React from 'react';

export interface BearingProps {
    name: string;
    status: StatusType,
    characteristics: CharacteristicData[] | undefined;
    style?: React.CSSProperties,
}
