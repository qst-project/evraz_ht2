import React from 'react';
import { StatusType } from '@services/types'
import { Colors } from '@services/constants';
import { IOilLevelData } from './OilLevel.types';
import OilLevel from './OilLevel'

interface OilLevelContainerProps {
    oilLevelData: IOilLevelData
}

const typeStatusColor = new Map<StatusType, string>([
    [StatusType.DEFAULT, Colors.GREEN],
    [StatusType.DANGER, Colors.RED],
    [StatusType.WARNING, Colors.ORANGE],
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
