import React from 'react'
import GasTemperature from '@shared/GasTemperature';

import { StatusType } from '@services/types';
import { Colors } from '@services/constants';
import { GasTemperatureData } from '../GasTemperature/GasTemperature.types';

const typeStatusColor = new Map<StatusType, string>([
    [StatusType.DEFAULT, Colors.GREY],
    [StatusType.DANGER, Colors.RED],
    [StatusType.WARNING, Colors.ORANGE],
]);

function Pipe() {
    const gasTemperatureData: GasTemperatureData = {
        value: 34,
        status: StatusType.DEFAULT,
    }
    return (
        <GasTemperature
            status={StatusType.DEFAULT}
            value={gasTemperatureData.value}
            strokeColor={typeStatusColor.get(gasTemperatureData.status)}
        />
    )
}

export default Pipe
