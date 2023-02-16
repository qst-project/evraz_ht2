import React from 'react'
import { StatusType } from '@services/types';
import { Colors } from '@services/constants';
import GasTemperature from './GasTemperature'
import { GasTemperatureContainerProps } from './GasTemperature.types'

const typeStatusColor = new Map<StatusType, string>([
    [StatusType.DEFAULT, Colors.GREY],
    [StatusType.DANGER, Colors.RED],
    [StatusType.WARNING, Colors.ORANGE],
]);

function GasTemperatureContainer({
    gasTemperatureData,
}: GasTemperatureContainerProps) {
    return (
        <GasTemperature
            value={gasTemperatureData.value}
            status={gasTemperatureData.status}
            strokeColor={typeStatusColor.get(gasTemperatureData.status)}
        />
    )
}
export default GasTemperatureContainer
