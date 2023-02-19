import React from 'react'
import {
    Col, Progress, Row, Tooltip, Typography,
} from 'antd';

import { GasTemperatureProps } from './GasTemperature.types';

function GasTemperature({
    strokeColor = '',
    value,
}: GasTemperatureProps) {
    return (
        <Tooltip title={value.moment} zIndex={100}>
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
                                    {value.value}
                                    °C
                                </div>

                            )
                        }
                        percent={
                            (value.value * 100) / 136
                        }
                    />
                </Row>

                <Row justify='center'>
                    <Typography.Text strong style={{ color: 'white' }}>
                        Температура газа
                    </Typography.Text>
                </Row>

            </Col>
        </Tooltip>
    );
}

export default GasTemperature
