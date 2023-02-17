import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import BearingList from '@shared/BearingList';
import { Colors } from '@services/constants';

import { ExhausterProps } from '@shared/ExhausterCard/ExhausterCard.types';
import styles from './ExhausterCard.module.scss';

function ExhausterCard({ exhausterData }: ExhausterProps) {
    const navigation = useNavigate()

    return (
        <Card className={styles.main}>
            <div className={styles.header}>
                <div
                    className={styles.status}
                    style={{
                        backgroundColor: exhausterData.isActive ? Colors.GREEN : Colors.RED,
                        boxShadow: `0 0 8px 0 ${exhausterData.isActive ? Colors.GREEN : Colors.RED}`,
                    }}
                />
                {exhausterData.isActive}
                <h3>{exhausterData.name}</h3>
                <Button
                    className={styles.watch}
                    onClick={() => navigation('/exhauster')}
                >
                    Watch
                </Button>
            </div>
            <div className={styles.rotor}>
                <h3>{exhausterData.rotorName}</h3>
                <span>{exhausterData.date}</span>
            </div>
            <div className={styles.replacement}>
                <p>Последняя замена ротора</p>
                <span>{exhausterData.lastRotorReplacement}</span>
                <div className={styles.forecast}>
                    <span>Прогноз</span>
                    {exhausterData.forecast}
                </div>
            </div>
            <BearingList exhausterData={exhausterData} />
        </Card>
    );
}

export default ExhausterCard;
