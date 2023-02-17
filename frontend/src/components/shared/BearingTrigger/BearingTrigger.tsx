import React from 'react'
import { Typography } from 'antd';

import { StatusType } from '@services/types';
import styles from './BearingTrigger.module.scss'
import { BearingTriggerProps } from './BearingTrigger.types';

const typeStatusClassName = new Map<StatusType, string>([
    [StatusType.DEFAULT, styles.default],
    [StatusType.DANGER, styles.danger],
    [StatusType.WARNING, styles.warning],
]);

function BearingTrigger({
    bearingName = 'ПС',
    bearingStatus,
}: BearingTriggerProps) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '372px',
                left: '233px',
            }}
            className={typeStatusClassName.get(bearingStatus)}
        >
            <Typography.Text strong>{bearingName}</Typography.Text>
        </div>
    )
}

export default BearingTrigger
