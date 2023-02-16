import React from 'react'
import { Card } from 'antd';
import styles from '@shared/Bearing/Bearing.module.scss';
import Characteristic from '@shared/Characteristic';
import { MainDriveProps } from './MainDrive.types';

function MainDrive({
    characteristics,
}: MainDriveProps) {
    return (
        <Card
            bordered
            title='Главный привод'
            type='inner'
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
