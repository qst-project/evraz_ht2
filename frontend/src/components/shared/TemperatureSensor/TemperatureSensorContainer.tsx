import React from 'react'

import { StatusType } from '@services/types';
import TemperatureSensor from './TemperatureSensor'

function TemperatureSensorContainer() {
    return (
        <TemperatureSensor
            value={100}
            status={StatusType.WARNING}
        />
    )
}
export default TemperatureSensorContainer
