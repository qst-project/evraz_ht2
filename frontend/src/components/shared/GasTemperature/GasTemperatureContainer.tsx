import React from 'react'
import { StatusType } from '@services/types';
import { Colors } from '@services/constants';
import GasTemperature from './GasTemperature'
import { GasTemperatureContainerProps } from './GasTemperature.types'

const typeStatusColor = new Map<number, string>([
    [StatusType.Default, Colors.GREY],
    [StatusType.Danger, Colors.RED],
    [StatusType.Warning, Colors.ORANGE],
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
