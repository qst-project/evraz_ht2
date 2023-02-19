import React from 'react'
import {
    Col, Progress, Row, Tooltip, Typography,
} from 'antd';

import { OilLevelProps } from './OilLevel.types';

function OilLevel({
    strokeColor,
    value,
}: OilLevelProps) {
    return (
        <Col span={24}>
            <Row>
                <Progress
                    showInfo
                    strokeLinecap='butt'
                    type='circle'
                    strokeColor={strokeColor}
                    percent={value.value}
                />
            </Row>
            <Tooltip title={value.moment}>
                <Row justify='center'>
                    <Typography.Text strong>Уровень масла</Typography.Text>
                </Row>
            </Tooltip>
        </Col>
    );
}

export default OilLevel
