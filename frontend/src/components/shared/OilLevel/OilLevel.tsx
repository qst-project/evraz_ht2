import React from 'react'
import {
    Col, Progress, Row, Typography,
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
                    percent={value}
                />
            </Row>
            <Row justify='center'>
                <Typography.Text strong>Уровень масла</Typography.Text>
            </Row>
        </Col>
    );
}

export default OilLevel
