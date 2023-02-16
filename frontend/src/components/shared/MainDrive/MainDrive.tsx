import React from 'react'
import { Card } from 'antd';
import styles from '@shared/Bearing/Bearing.module.scss';
import Characteristic from '@shared/Characteristic';

import { Colors } from '@services/constants'
import { StatusType } from '@services/types';

import { MainDriveProps } from './MainDrive.types';

const defaultStyle = {
}

const dangerStyle = {
    boxShadow: `0 0 8px 0 ${Colors.RED}`,
}

const warningStyle = {
    boxShadow: `0 0 8px 0 ${Colors.ORANGE}`,
}

const typeStatusClassName = new Map<StatusType, object>([
    [StatusType.DEFAULT, defaultStyle],
    [StatusType.DANGER, dangerStyle],
    [StatusType.WARNING, warningStyle],
]);

function MainDrive({
    characteristics,
}: MainDriveProps) {
    return (
        <Card
            bordered
            title='Главный привод'
            type='inner'
            style={typeStatusClassName.get(StatusType.WARNING)}
        >
            <div className={styles.characteristics}>
                {characteristics.map((item) => (
                    <Characteristic characteristic={item} />
                ))}
            </div>
        </Card>
    );
}

export default MainDrive
