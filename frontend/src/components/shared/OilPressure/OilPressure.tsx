import React from 'react'
import {
    Card, Col, Progress, Row, Typography,
} from 'antd';
import { Colors } from '@services/constants'
import { StatusType } from '@services/types';
import { OilPressureProps } from './OilPressure.types';

import styles from './OilPressure.module.scss'

const defaultStyle = {
}

const dangerStyle = {
    boxShadow: `0 0 8px 0 ${Colors.RED}`,
}

const warningStyle = {
    boxShadow: `0 0 8px 0 ${Colors.ORANGE_TRANSPARENT}`,
}

const typeStatusClassName = new Map<StatusType, object>([
    [StatusType.DEFAULT, defaultStyle],
    [StatusType.DANGER, dangerStyle],
    [StatusType.WARNING, warningStyle],
]);

const a = '#e8e8e8';

function OilPressure({
    strokeColor = '',
    value = 0,
    status = StatusType.DEFAULT,
}: OilPressureProps) {
    return (
        <Card
            bordered
            className={styles.oilPressure}
            bodyStyle={{ padding: '12px', backgroundColor: a }}
            style={{ ...typeStatusClassName.get(status), border: '2px solid rgb(142,161,161)' }}
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
