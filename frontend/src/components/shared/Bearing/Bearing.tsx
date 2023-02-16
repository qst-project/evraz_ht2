import React from 'react';
import { Card } from 'antd';
import Characteristic from '@shared/Characteristic';
import {
    BearingProps,
} from './Bearing.types';
import styles from './Bearing.module.scss'

function Bearing({
    name,
    characteristics,
}: BearingProps) {
    return (
        <Card
            bordered
            type='inner'
            title={name}
        >
            <div className={styles.characteristics}>
                {characteristics.map((item) => (
                    <Characteristic characteristic={item} />
                ))}
            </div>
        </Card>
    )
}

export default Bearing
