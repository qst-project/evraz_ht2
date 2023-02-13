import React, { FC } from 'react'

import TemperatureSensor from './TemperatureSensor'

interface TemperatureSensorContainerProps {
}

function TemperatureSensorContainer ({}: TemperatureSensorContainerProps) {
    return (
        <TemperatureSensor
            value={100}
            status={1}
        />
    )
}
export default TemperatureSensorContainer