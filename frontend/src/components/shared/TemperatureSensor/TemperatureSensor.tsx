import React from 'react'
import { Tooltip, Typography } from 'antd';

import { StatusType } from '@services/types';

import { TemperatureSensorProps } from './TemperatureSensor.types';
import styles from './TemperatureSensor.module.scss'

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

function TemperatureSensor({
    value,
    status,
}: TemperatureSensorProps) {
    return (
        <div
            className={getStatusClassName(status, styles.wrapper)}
        >
            <Tooltip title={value.moment}>
                <Typography.Text>
                    {value.value}
                    {' '}
                    °C
                </Typography.Text>
            </Tooltip>

        </div>
    )
}
export default TemperatureSensor
