import React from 'react'

import { StatusType } from '@services/types';
import { Colors } from '@services/constants';
import { OilPressureContainerProps } from './OilPressure.types';

import OilPressure from './OilPressure';

const typeStatusColor = new Map<StatusType, string>([
    [StatusType.DEFAULT, Colors.GREEN],
    [StatusType.DANGER, Colors.RED],
    [StatusType.WARNING, Colors.ORANGE],
]);

function OilPressureContainer({
    oilPressureData,
}: OilPressureContainerProps) {
    return (
        <OilPressure
            status={oilPressureData.status}
            value={oilPressureData.value}
            strokeColor={typeStatusColor.get(oilPressureData.status)}
        />
    );
}

export default OilPressureContainer
