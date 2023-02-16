import React from 'react';
import { Collapse } from 'antd';
import TrendsOption from '@shared/TrendsOption';
import { Characteristics, ExhausterTrends, StatusType } from '@services/types';
import styles from './TrendsSidebar.module.scss';

const { Panel } = Collapse;

const mock: ExhausterTrends = {
    bearings: [
        {
            name: '1 ПС',
            characteristics: [
                { type: Characteristics.TEMPERATURE, value: 233, status: StatusType.DEFAULT },
                { type: Characteristics.VERTICAL, value: 12, status: StatusType.DEFAULT },
                { type: Characteristics.HORIZONTAL, value: 423, status: StatusType.DEFAULT },
                { type: Characteristics.AXIS, value: 23, status: StatusType.DEFAULT },
            ],
        },
        {
            name: '2 ПС',
            characteristics: [
                { type: Characteristics.TEMPERATURE, value: 0, status: StatusType.DEFAULT },
            ],
        },
    ],
    other: [
        {
            name: 'Маслоблок',
            characteristics: [
                { type: Characteristics.OIL_LEVEL, value: 233, status: StatusType.DEFAULT },
                { type: Characteristics.OIL_PRESSURE, value: 12, status: StatusType.DEFAULT },
            ],
        },
        {
            name: 'Главный привод',
            characteristics: [
                { type: Characteristics.AMPERAGE, value: 5, status: StatusType.DEFAULT },
            ],
        },
    ],
};

function TrendsSidebar() {
    return (
        <div className={styles.main}>
            <Collapse size='small'>
                <Panel key={1} header='Подшипники'>
                    <Collapse size='small' bordered={false}>
                        {mock.bearings.map((item) => (
                            <Panel key={item.name} header={item.name}>
                                {item.characteristics.map((_item) => (
                                    <TrendsOption name={_item.type} value={_item.value} />
                                ))}
                            </Panel>
                        ))}
                    </Collapse>
                </Panel>
                {mock.other.map((item) => (
                    <Panel key={item.name} header={item.name}>
                        {item.characteristics.map((_item) => (
                            <TrendsOption name={_item.type} value={_item.value} />
                        ))}
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
}

export default TrendsSidebar;
