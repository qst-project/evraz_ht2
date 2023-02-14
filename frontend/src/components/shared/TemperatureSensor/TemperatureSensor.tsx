import { Typography } from 'antd';
import React from 'react'
import { StatusType } from '@services/types';
import { TemperatureSensorProps } from './TemperatureSensor.types';

const defaultStyle = {
    padding: '0.5rem',
    borderRadius: '10px',
    background: '#9f9f9e',
    color: '#',
}

const dangerStyle = {
    padding: '0.5rem',
    borderRadius: '10px',
    background: '#f5573b',
    color: '#ffffff',
}

const warningStyle = {
    padding: '0.5rem',
    borderRadius: '10px',
    background: '#f5c134',
    color: '#ffffff',
}

const typeStatusStyle = new Map<number, object>([
    [StatusType.Default, defaultStyle],
    [StatusType.Danger, dangerStyle],
    [StatusType.Warning, warningStyle],
]);

function TemperatureSensor({
    value,
    status,
}: TemperatureSensorProps) {
    return (
        <div
            style={typeStatusStyle.get(status)}
        >
            <Typography.Text strong>
                {value}
                {' '}
                °C
            </Typography.Text>
        </div>
    )
}
export default TemperatureSensor
