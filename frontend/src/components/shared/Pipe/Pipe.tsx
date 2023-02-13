import { FC } from "react"
import { GasTemperatureData } from "../GasTemperature/GasTemperature.types";
import { PipeProps } from "./Pipe.types";
import GasTemperature from "@shared/GasTemperature";

import { StatusType } from '@services/types';
import { Colors } from '@services/constants';

const typeStatusColor = new Map<number, string>([
    [StatusType.Default, Colors.GREY],
    [StatusType.Danger, Colors.RED],
    [StatusType.Warning, Colors.ORANGE],
]);

function Pipe({
    pipeData,
}: PipeProps) {
    const gasTemperatureData: GasTemperatureData = {
        value: 34,
        status: 0,
    }
    return (
        <GasTemperature
            status={0}
            value={gasTemperatureData.value}
            strokeColor={typeStatusColor.get(gasTemperatureData.status)}
        />
    )
}

export default Pipe