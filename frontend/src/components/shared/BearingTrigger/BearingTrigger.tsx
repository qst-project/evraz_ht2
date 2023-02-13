import React from 'react'
import { Button, Typography } from 'antd';

import styles from './BearingTrigger.module.scss'
import { BearingTriggerProps } from './BearingTrigger.types';

import { StatusType } from '@services/types';

const typeStatusClassName = new Map<number, string>([
    [StatusType.Default, styles.default],
    [StatusType.Danger, styles.danger],
    [StatusType.Warning, styles.warning],
]);

function BearingTrigger({
    bearingName = 'ПС',
    bearingStatus,
    showBearing,
    setShowBearing
}: BearingTriggerProps) {
    return (
        <Button
            className={typeStatusClassName.get(bearingStatus)}
            onClick={
                bearingStatus === 0
                    ? () => setShowBearing(!showBearing)
                    : () => setShowBearing(true)
            }>
            <Typography.Text strong>{bearingName}</Typography.Text>
        </Button>
    )
}

export default BearingTrigger