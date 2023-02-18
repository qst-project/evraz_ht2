import React from 'react'
import {
    Col, Progress, Row, Typography,
} from 'antd';

import { GasTemperatureProps } from './GasTemperature.types';

function GasTemperature({
    strokeColor = '',
    value = 0,
}: GasTemperatureProps) {
    return (
        <Col span={24}>
            <Row justify='center'>
                <Progress
                    showInfo
                    strokeLinecap='butt'
                    steps={6}
                    trailColor='grey'
                    strokeColor={strokeColor}
                    format={
                        // eslint-disable-next-line react/no-unstable-nested-components
                        () => (
                            <div style={{ color: 'white' }}>
                                {value}
                                °C
                            </div>
                        )
                    }
                    percent={(value * 100) / 136}
                />
            </Row>
            <Row justify='center'>
                <Typography.Text strong style={{ color: 'white' }}>
                    Температура газа
                </Typography.Text>
            </Row>
        </Col>
    );
}

export default GasTemperature
