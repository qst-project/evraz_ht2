import React, { FC } from 'react'
;
import { IOilLevelData } from './OilLevel.types';
import OilLevel from './OilLevel'

import { StatusType } from '@services/types'

interface OilLevelContainerProps {
    oilLevelData: IOilLevelData
}

const typeStatusColor = new Map<number, string>([
    [StatusType.Default, 'green'],
    [StatusType.Danger, '#CC0000'],
    [StatusType.Warning, '#FFC930'],
]);

const OilLevelContainer: FC<OilLevelContainerProps> = ({
    oilLevelData,
}) => {
    return (
        <OilLevel
            value={oilLevelData.value}
            strokeColor={typeStatusColor.get(oilLevelData.status)}
        />
    );
}

export default OilLevelContainer
