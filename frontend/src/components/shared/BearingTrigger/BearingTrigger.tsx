import React from 'react'
import { Button, Typography } from 'antd';

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
    showBearing,
    setShowBearing,
}: BearingTriggerProps) {
    return (
        <Button
            className={typeStatusClassName.get(bearingStatus)}
            onClick={
                bearingStatus === StatusType.DEFAULT
                    ? () => setShowBearing(!showBearing)
                    : () => setShowBearing(true)
            }
        >
            <Typography.Text strong>{bearingName}</Typography.Text>
        </Button>
    )
}

export default BearingTrigger
