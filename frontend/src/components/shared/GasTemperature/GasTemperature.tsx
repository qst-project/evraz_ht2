import React from 'react'
import {
    Card, Col, Progress, Row, Typography,
} from 'antd';
import { StatusType } from '@services/types';
import styles from './GasTemperature.module.scss'
import { GasTemperatureProps } from './GasTemperature.types';

const defaultStyle = {
}

const dangerStyle = {
    border: '1px solid #f5573b',
}

const warningStyle = {
    border: '1px solid #f5c134',
}

const typeStatusClassName = new Map<number, object>([
    [StatusType.Default, defaultStyle],
    [StatusType.Danger, dangerStyle],
    [StatusType.Warning, warningStyle],
]);

function GasTemperature({
    strokeColor = '',
    value = 0,
    status = StatusType.Warning,
}: GasTemperatureProps) {
    return (
        <Card
            bordered
            className={styles.gasTemperature}
            style={typeStatusClassName.get(status)}
            headStyle={{ backgroundColor: '#4A4B4A', color: '#ffffff' }}
            bodyStyle={{ backgroundColor: '#E0E0E0', color: '#ffffff' }}
        >
            <Col span={24}>
                <Progress
                    showInfo
                    strokeLinecap='butt'
                    steps={6}
                    strokeColor={strokeColor}
                    format={
                        // eslint-disable-next-line react/no-unstable-nested-components
                        () => (
                            <>
                                {value}
                                °C
                            </>
                        )
                    }
                    percent={(value * 100) / 136}
                />
                <Row justify='center'>
                    <Typography.Text strong>
                        Температура газа
                    </Typography.Text>
                </Row>
            </Col>
        </Card>
    );
}

export default GasTemperature
