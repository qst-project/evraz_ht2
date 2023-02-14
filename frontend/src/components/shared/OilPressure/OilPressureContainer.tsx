import React from 'react'

import { StatusType } from '@services/types';
import { OilPressureContainerProps } from './OilPressure.types';

import OilPressure from './OilPressure';

const typeStatusColor = new Map<number, string>([
    [StatusType.Default, 'green'],
    [StatusType.Danger, '#f5573b'],
    [StatusType.Warning, '#f5c134'],
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
