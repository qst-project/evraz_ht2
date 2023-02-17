import React from 'react'
import { Card } from 'antd';

import { StatusType } from '@services/types';

import { OilTankProps } from '@shared/OilTank/OilTank.types';
import { IOilLevelData } from '../OilLevel/OilLevel.types';
import OilLevelContainer from '../OilLevel';

const defaultStyle = {
}

const dangerStyle = {
}

const warningStyle = {
}

const typeStatusClassName = new Map<StatusType, object>([
    [StatusType.DEFAULT, defaultStyle],
    [StatusType.DANGER, dangerStyle],
    [StatusType.WARNING, warningStyle],
]);

function OilTank({ style }: OilTankProps) {
    const oilLevelData: IOilLevelData = {
        status: StatusType.DANGER,
        value: 5.4,
    }
    const a = '#e8e8e8';

    return (
        <Card
            bordered
            title='Маслобак'
            style={{
                ...typeStatusClassName.get(oilLevelData.status),
                ...style,
                border: '2px solid rgb(142,161,161)',
            }}
            bodyStyle={{ padding: '12px', backgroundColor: a }}
            headStyle={{
                minHeight: '0',
                textAlign: 'center',
                backgroundColor: a,
            }}
        >
            <OilLevelContainer oilLevelData={oilLevelData} />
        </Card>
    );
}

export default OilTank
