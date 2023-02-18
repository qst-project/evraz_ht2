import React from 'react'

import { StatusType } from '@services/types';
import TemperatureSensor from './TemperatureSensor'

function TemperatureSensorContainer({ style, value }: any) {
    return (
        <div style={style}>
            <TemperatureSensor
                value={value}
                status={StatusType.DEFAULT}
            />
        </div>
    )
}
export default TemperatureSensorContainer
