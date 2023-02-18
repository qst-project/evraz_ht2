import React from 'react';
import { Card } from 'antd';
import Characteristic from '@shared/Characteristic';
import { Colors } from '@services/constants';
import {
    BearingProps,
} from './Bearing.types';
import styles from './Bearing.module.scss'

function Bearing({
    name,
    characteristics,
    style,
}: BearingProps) {
    return (
        <Card
            bordered
            title={name}
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
                {characteristics?.map((item) => (
                    <Characteristic
                        characteristic={item}
                        key={item.type}
                    />
                ))}
            </div>
        </Card>
    )
}

export default Bearing
