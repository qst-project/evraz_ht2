import React from 'react'
import { Card } from 'antd';
import styles from '@shared/Bearing/Bearing.module.scss';
import Characteristic from '@shared/Characteristic';

import { Colors } from '@services/constants'

import { MainDriveProps } from './MainDrive.types';

function MainDrive({
    characteristics,
    style,
}: MainDriveProps) {
    return (
        <Card
            bordered
            title='Главный привод'
            style={style}
            bodyStyle={{ padding: '12px', backgroundColor: Colors.GREY_DARK }}
            headStyle={{
                minHeight: '0',
                textAlign: 'center',
                backgroundColor: Colors.GREY_DARK,
                color: '#fff',
            }}
        >
            <div className={styles.characteristics}>
                {characteristics.map((item) => (
                    <Characteristic
                        characteristic={item}
                        key={item.type}
                    />
                ))}
            </div>
        </Card>
    );
}

export default MainDrive
