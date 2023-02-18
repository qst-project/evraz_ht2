import React from 'react';
import { Card } from 'antd';
import ExhausterCard from '@shared/ExhausterCard';
import { SinterMachineProps } from './SinterMachine.types';
import styles from './SinterMachine.module.scss';

function SinterMachine({ sinterMachineData }: SinterMachineProps) {
    return (
        <div className={styles.main}>
            <Card size='small' className={styles.title}>
                <h3>{sinterMachineData.name}</h3>
            </Card>
            <div className={styles.exhausters}>
                {sinterMachineData.exhausters.map((item) => (
                    <ExhausterCard exhausterData={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default SinterMachine;
