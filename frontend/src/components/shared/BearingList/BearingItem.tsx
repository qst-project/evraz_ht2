import React from 'react';
import { Characteristics, StatusType } from '@services/types';
import { ReactComponent as ThermometerIcon } from '@images/thermometer.svg';
import { ReactComponent as DropIcon } from '@images/drop.svg';
import { BearingItemProps } from './BearingList.types';
import styles from './BearingList.module.scss';

const abbreviations = {
    [Characteristics.TEMPERATURE]: 'T',
    [Characteristics.OIL_LEVEL]: 'L',
};

function BearingItem({ bearingData }: BearingItemProps) {
    const getIcon = (characteristic: Characteristics, props: any = {}) => {
        switch (characteristic) {
            case Characteristics.TEMPERATURE:
                return <ThermometerIcon {...props} />;
            case Characteristics.OIL_LEVEL:
                return <DropIcon {...props} />;
            default:
                return null;
        }
    };

    const getCharacteristicClassName = (status: StatusType) => {
        switch (status) {
            case StatusType.Danger:
                return `${styles.characteristic} ${styles['characteristic-danger']}`;
            case StatusType.Warning:
                return `${styles.characteristic} ${styles['characteristic-warning']}`;
            case StatusType.Default:
                return styles.characteristic;
            default:
                return styles.characteristic;
        }
    };

    return (
        <li className={styles.item}>
            <span>{bearingData.name}</span>
            <ul className={styles.characteristics}>
                {bearingData.characteristics.map((item) => (
                    <li
                        className={getCharacteristicClassName(item.status)}
                        key={item.name}
                    >
                        {abbreviations[item.name]}
                        {getIcon(item.name, { className: styles.icon })}
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default BearingItem;
