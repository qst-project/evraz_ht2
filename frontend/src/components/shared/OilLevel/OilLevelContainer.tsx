import React from 'react';
import { StatusType } from '@services/types'
import { IOilLevelData } from './OilLevel.types';
import OilLevel from './OilLevel'

interface OilLevelContainerProps {
    oilLevelData: IOilLevelData
}

const typeStatusColor = new Map<number, string>([
    [StatusType.Default, 'green'],
    [StatusType.Danger, '#CC0000'],
    [StatusType.Warning, '#FFC930'],
]);

function OilLevelContainer({
    oilLevelData,
}: OilLevelContainerProps) {
    return (
        <OilLevel
            value={oilLevelData.value}
            strokeColor={typeStatusColor.get(oilLevelData.status)}
        />
    )
}

export default OilLevelContainer
