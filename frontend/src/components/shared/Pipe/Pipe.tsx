import React from 'react'
import GasTemperature from '@shared/GasTemperature';
import { Card } from 'antd';

import { Characteristics, StatusType } from '@services/types';
import { Colors } from '@services/constants';

import styles from './Pipe.module.scss'
import { GasTemperatureData } from '../GasTemperature/GasTemperature.types';
import Characteristic from '../Characteristic';

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

const typeStatusColor = new Map<StatusType, string>([
    [StatusType.DEFAULT, Colors.GREY],
    [StatusType.DANGER, Colors.RED],
    [StatusType.WARNING, Colors.ORANGE],
]);

function Pipe() {
    const gasTemperatureData: GasTemperatureData = {
        value: 34,
        status: StatusType.DANGER,
    }

    const characteristics = [
        {
            status: StatusType.WARNING,
            name: Characteristics.UNDERPRESSURE,
            value: 10,
        },
        {
            status: StatusType.DEFAULT,
            name: Characteristics.DUST_LEVEL,
            value: 0,
        },
    ]

    return (
        <Card
            bordered
            className={styles.pipe}
            style={typeStatusClassName.get(gasTemperatureData.status)}
        >
            <GasTemperature
                status={StatusType.DEFAULT}
                value={gasTemperatureData.value}
                strokeColor={typeStatusColor.get(gasTemperatureData.status)}
            />
            <div className={styles.characteristics}>
                {characteristics.map((item) => (
                    <Characteristic characteristic={item} />
                ))}
            </div>
        </Card>
    )
}

export default Pipe
