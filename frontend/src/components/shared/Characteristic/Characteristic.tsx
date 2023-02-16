import React from 'react';
import { characteristicUnits } from '@services/constants';
import { StatusType } from '@services/types';
import styles from './Characteristic.module.scss';
import { CharacteristicProps } from './Characteristic.types';

function Characteristic({ characteristic }: CharacteristicProps) {
    const getStatusClassName = (status: StatusType, baseStyle: string) => {
        switch (status) {
            case StatusType.WARNING:
                return `${baseStyle} ${styles.warning}`;
            case StatusType.DANGER:
                return `${baseStyle} ${styles.danger}`;
            case StatusType.DEFAULT:
                return baseStyle;
            default:
                return baseStyle;
        }
    }

    return (
        <div className={styles.main}>
            <div
                className={getStatusClassName(characteristic.status, styles.animation)}
                style={{
                    display: characteristic.status === StatusType.DEFAULT ? 'none' : 'block',
                }}
            />
            <div className={getStatusClassName(characteristic.status, styles.wrapper)}>
                <span className={styles.type}>{characteristicUnits.get(characteristic.type)}</span>
                <span className={styles.value}>{characteristic.value}</span>
            </div>
        </div>
    );
}

export default Characteristic;
