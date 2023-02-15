import React from 'react';
import { Collapse } from 'antd';
import TrendsOption from '@shared/TrendsOption';
import { Characteristics, ExhausterTrends } from '@services/types';
import styles from './TrendsSidebar.module.scss';

const { Panel } = Collapse;

const mock: ExhausterTrends = {
    bearings: [
        {
            name: '1 ПС',
            characteristics: [
                { name: Characteristics.TEMPERATURE, value: 233 },
                { name: Characteristics.VERTICAL, value: 12 },
                { name: Characteristics.HORIZONTAL, value: 423 },
                { name: Characteristics.AXIS, value: 23 },
            ],
        },
        {
            name: '2 ПС',
            characteristics: [
                { name: Characteristics.TEMPERATURE, value: 0 },
            ],
        },
    ],
    other: [
        {
            name: 'Маслоблок',
            characteristics: [
                { name: Characteristics.OIL_LEVEL, value: 233 },
                { name: Characteristics.OIL_PRESSURE, value: 12 },
            ],
        },
        {
            name: 'Главный привод',
            characteristics: [
                { name: Characteristics.AMPERAGE, value: 5 },
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
                                    <TrendsOption name={_item.name} value={_item.value} />
                                ))}
                            </Panel>
                        ))}
                    </Collapse>
                </Panel>
                {mock.other.map((item) => (
                    <Panel key={item.name} header={item.name}>
                        {item.characteristics.map((_item) => (
                            <TrendsOption name={_item.name} value={_item.value} />
                        ))}
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
}

export default TrendsSidebar;
