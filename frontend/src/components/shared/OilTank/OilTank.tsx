import React from 'react'
import { Card } from 'antd';

import { StatusType } from '@services/types';

import { Colors } from '@services/constants';
import { IOilLevelData } from '../OilLevel/OilLevel.types';
import OilLevelContainer from '../OilLevel';

const defaultStyle = {
}

const dangerStyle = {
    boxShadow: `0 0 8px 0 ${Colors.RED}`,
}

const warningStyle = {
    boxShadow: `0 0 8px 0 ${Colors.ORANGE}`,
}

const typeStatusClassName = new Map<StatusType, object>([
    [StatusType.DEFAULT, defaultStyle],
    [StatusType.DANGER, dangerStyle],
    [StatusType.WARNING, warningStyle],
]);

function OilTank() {
    const oilLevelData: IOilLevelData = {
        status: StatusType.DANGER,
        value: 5.4,
    }

    return (
        <Card
            bordered
            title='Маслобак'
            style={typeStatusClassName.get(oilLevelData.status)}
        >
            <OilLevelContainer oilLevelData={oilLevelData} />
        </Card>
    );
}

export default OilTank
