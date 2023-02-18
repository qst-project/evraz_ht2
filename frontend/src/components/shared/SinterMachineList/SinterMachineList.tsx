import React from 'react';
import SinterMachine from '@shared/SinterMachine';
import { Card } from 'antd';
import styles from './SinterMachineList.module.scss';
import { SinterMachineListProps } from './SinterMachineList.types';
import TimingInfo from '../TimingInfo';

function SinterMachineList({
    sinterMachines = [],
    moment,
    delay,
}: SinterMachineListProps) {
    return (
        <Card title='Главный экран' className={styles.main}>
            <TimingInfo moment={moment} delay={delay} />
            <div className={styles.list}>
                {sinterMachines.map((item) => (
                    <SinterMachine sinterMachineData={item} key={item.id} />
                ))}
            </div>
        </Card>
    );
}

export default SinterMachineList;
