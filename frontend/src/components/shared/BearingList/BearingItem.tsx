import React from 'react';
import { Row, Tooltip } from 'antd';
import { CharacteristicsBackend, StatusType } from '@services/types';
import { ReactComponent as ThermometerIcon } from '@images/thermometer.svg';
import { ReactComponent as DropIcon } from '@images/drop.svg';
import { BearingItemProps } from './BearingList.types';
import styles from './BearingList.module.scss';

const abbreviations: Record<string, string> = {
    [CharacteristicsBackend.TEMPERATURE]: 'T',
    [CharacteristicsBackend.OIL_LEVEL]: 'L',
    [CharacteristicsBackend.AXIS]: 'A',
    [CharacteristicsBackend.HORIZONTAL]: 'H',
    [CharacteristicsBackend.VERTICAL]: 'V',
    [CharacteristicsBackend.AMPERAGE]: 'A',
    [CharacteristicsBackend.OIL_PRESSURE]: 'P',
};

function BearingItem({ bearingData }: BearingItemProps) {
    const getIcon = (characteristic: CharacteristicsBackend, props: any = {}) => {
        switch (characteristic) {
            case CharacteristicsBackend.TEMPERATURE:
                return <ThermometerIcon {...props} />;
            case CharacteristicsBackend.OIL_LEVEL:
                return <DropIcon {...props} />;
            default:
                return null;
        }
    };

    const getCharacteristicClassName = (status: StatusType) => {
        switch (status) {
            case StatusType.DANGER:
                return `${styles.characteristic} ${styles['characteristic-danger']}`;
            case StatusType.WARNING:
                return `${styles.characteristic} ${styles['characteristic-warning']}`;
            case StatusType.DEFAULT:
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
                        key={item.type}
                    >
                        <Tooltip title={item.value.value}>
                            <Row align={'middle'} justify={'center'}>
                                {abbreviations[item.type]}
                                {getIcon(item.type, { className: styles.icon })}
                            </Row>
                        </Tooltip>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default BearingItem;
