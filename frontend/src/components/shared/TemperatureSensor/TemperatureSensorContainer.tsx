import React from 'react'

import { StatusType } from '@services/types';
import TemperatureSensor from './TemperatureSensor'

function TemperatureSensorContainer({ style }: any) {
    return (
        <div style={style}>
            <TemperatureSensor
                value={100}
                status={StatusType.WARNING}
            />
        </div>
    )
}
export default TemperatureSensorContainer
