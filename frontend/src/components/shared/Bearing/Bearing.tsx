import React, { useEffect, useState } from 'react';
import { Card, Descriptions, Typography } from 'antd';

import { StatusType } from '@services/types';
import {
    BearingProps,
    BearingPropsItemType,
} from './Bearing.types';
import styles from './Bearing.module.scss'

const typeDataUnits = new Map<number, string>([
    [BearingPropsItemType.Temperature, 'T, °C'],
    [BearingPropsItemType.Vertical, 'В, мм/c'],
    [BearingPropsItemType.Horizontal, 'Г, мм/c'],
    [BearingPropsItemType.Axis, 'O, мм/c'],
]);

const typeStatusClassName = new Map<number, string>([
    [StatusType.Default, styles.default],
    [StatusType.Danger, styles.characteristic_danger],
    [StatusType.Warning, styles.characteristic_warning],
]);

function Bearing({
    name = '9 ПС',
    status,
    bearingData,
}: BearingProps) {
    let stompClient: any = null;

    const [data, setData] = useState(0)
    const onMessageReceived = (msg: any) => {
        const notification = JSON.parse(msg.body);
        console.log(notification)
        setData(notification.temp)
    };

    const onConnected = () => {
        console.log('connected')
        stompClient.subscribe(
            '/user/1/queue/messages',
            onMessageReceived,
        );
    };

    const connect = () => {
        // eslint-disable-next-line global-require
        const Stomp = require('stompjs')
        // eslint-disable-next-line global-require
        let SockJS = require('sockjs-client')
        SockJS = new SockJS('http://0.0.0.0:9090/ws')
        stompClient = Stomp.over(SockJS);
        stompClient.connect({}, onConnected, (e: any) => console.warn(e))
    };

    useEffect(() => {
        connect();
    }, []);

    return (
        <Card
            bordered
            type='inner'
            title={name}
            className={styles.bearing}
            headStyle={{ backgroundColor: '#4A4B4A', color: '#ffffff' }}
            bodyStyle={{ backgroundColor: '#E0E0E0', color: '#ffffff' }}
        >
            <Descriptions
                bordered
                size='small'
                column={1}
            >
                {
                    bearingData.map(
                        (bearingPropsData, index) => (
                            <Descriptions.Item
                                key={index}
                                className={typeStatusClassName.get(bearingPropsData.status)}
                                label={(
                                    <Typography.Text strong>
                                        {typeDataUnits.get(bearingPropsData.type)}
                                    </Typography.Text>
                                )}
                            >
                                {data}
                                {/* {bearingPropsData.value} */}
                            </Descriptions.Item>
                        ),
                    )
                }
            </Descriptions>
        </Card>
    )
}

export default Bearing
