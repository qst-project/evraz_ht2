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

    );
}

export default GasTemperature
