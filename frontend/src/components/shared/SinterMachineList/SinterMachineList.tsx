import React from 'react';
import SinterMachine from '@shared/SinterMachine';
import { Card } from 'antd';
import styles from './SinterMachineList.module.scss';
import { SinterMachineListProps } from './SinterMachineList.types';

function SinterMachineList({ sinterMachines }: SinterMachineListProps) {
    return (
        <Card title='Главный экран' className={styles.main}>
            <div className={styles.list}>
                {sinterMachines.map((item, index) => (
                    <SinterMachine sinterMachineData={item} key={index} />
                ))}
            </div>
        </Card>
    );
}

export default SinterMachineList;
