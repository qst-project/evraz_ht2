import React from 'react'
import GasTemperature from '@shared/GasTemperature';
import { Card } from 'antd';

import { Characteristics, StatusType } from '@services/types';
import { Colors } from '@services/constants';

import styles from './Pipe.module.scss'
import { GasTemperatureData } from '../GasTemperature/GasTemperature.types';
import Characteristic from '../Characteristic';
import { PipeProps } from './Pipe.types';

const defaultStyle = {
}

const dangerStyle = {
}

const warningStyle = {
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

function Pipe({ style, temperature, underpressure }: PipeProps) {
    const gasTemperatureData: GasTemperatureData = {
        value: temperature,
        status: StatusType.DEFAULT,
    }

    const characteristics = [
        {
            status: StatusType.DEFAULT,
            type: Characteristics.UNDERPRESSURE,
            value: underpressure,
        },
    ]

    return (
        <Card
            bordered
            className={styles.pipe}
            style={{
                ...typeStatusClassName.get(gasTemperatureData.status),
                ...style,
            }}
        >
            <GasTemperature
                status={StatusType.DEFAULT}
                value={gasTemperatureData.value}
                strokeColor={typeStatusColor.get(gasTemperatureData.status)}
            />
            <div className={styles.characteristics}>
                {characteristics.map((item) => (
                    <Characteristic
                        characteristic={item}
                        key={item.type}
                    />
                ))}
            </div>
        </Card>
    )
}

export default Pipe
