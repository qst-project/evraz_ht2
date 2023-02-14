import React from 'react'

import TemperatureSensor from './TemperatureSensor'

function TemperatureSensorContainer() {
    return (
        <TemperatureSensor
            value={100}
            status={1}
        />
    )
}
export default TemperatureSensorContainer
