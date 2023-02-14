import {
    Card, Col, Progress, Row, Typography,
} from 'antd';
import React from 'react'
import { StatusType } from '@services/types';
import { OilPressureProps } from './OilPressure.types';

import styles from './OilPressure.module.scss'

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

function OilPressure({
    strokeColor = '',
    value = 0,
    status = StatusType.Warning,
}: OilPressureProps) {
    return (
        <Card
            bordered
            className={styles.oilPressure}
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
                                мг/см
                                <sup>2</sup>
                            </>
                        )
                    }
                    percent={(value * 100) / 6}
                />
                <Row justify='center'>
                    <Typography.Text strong>Давление масла</Typography.Text>
                </Row>
            </Col>
        </Card>
    );
}

export default OilPressure
