import React from 'react'
import { Card } from 'antd';

import { StatusType } from '@services/types';

import { IOilLevelData } from '../OilLevel/OilLevel.types';
import OilLevelContainer from '../OilLevel';

const defaultStyle = {
}

const dangerStyle = {
    border: '1px solid #CC0000',
}

const warningStyle = {
    border: '1px solid #FFC930',
}

const typeStatusClassName = new Map<number, object>([
    [StatusType.Default, defaultStyle],
    [StatusType.Danger, dangerStyle],
    [StatusType.Warning, warningStyle],
]);

function OilTank() {
    const oilLevelData: IOilLevelData = {
        status: StatusType.Danger,
        value: 5.4,
    }

    return (
        <Card
            bordered
            title='Маслобак'
            style={typeStatusClassName.get(oilLevelData.status)}
            headStyle={{ backgroundColor: '#4A4B4A', color: '#ffffff' }}
            bodyStyle={{ backgroundColor: '#E0E0E0', color: '#ffffff' }}
        >
            <OilLevelContainer oilLevelData={oilLevelData} />
        </Card>
    );
}

export default OilTank
