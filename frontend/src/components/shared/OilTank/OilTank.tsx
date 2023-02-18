import React from 'react'
import { Card } from 'antd';

import { StatusType } from '@services/types';

import { OilTankProps } from '@shared/OilTank/OilTank.types';
import { IOilLevelData } from '../OilLevel/OilLevel.types';
import OilLevelContainer from '../OilLevel';

function OilTank({ style, value }: OilTankProps) {
    const oilLevelData: IOilLevelData = {
        status: StatusType.DEFAULT,
        value,
    }
    const a = '#e8e8e8';

    return (
        <Card
            bordered
            title='Маслобак'
            style={{
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
