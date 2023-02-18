import {
    BearingData,
    Characteristics,
    SinterMachineData,
    SinterMachinesResponse,
    StatusType,
} from '@services/types';

export const mapSinterMachinesResponse = (response: SinterMachinesResponse)
    : [SinterMachineData[], string] => {
    const sinterMachines: SinterMachineData[] = response.machines.map((machine) => ({
        name: `Агломашина №${machine.number}`,
        id: machine.number,
        exhausters: machine.exhausters.map((ex) => ({
            name: ex.name,
            id: ex.number,
            sinterMachineId: machine.number,
            bearings: ex.bearings.other.map((bearing) => {
                const res: BearingData = {
                    number: bearing.number,
                    name: `ПС ${bearing.number}`,
                    characteristics: [],
                };
                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(bearing)) {
                    if (value?.value === null) {
                        break;
                    }
                    if (Object.values(Characteristics).includes(key as Characteristics)) {
                        res.characteristics.push({
                            type: key as Characteristics,
                            status: StatusType.DEFAULT,
                            value: value.value?.toFixed(2) || null,
                        })
                    }
                }
                return res;
            }),
            problems: ex.bearings.warn.map((bearing) => {
                const res: BearingData = {
                    number: bearing.number,
                    name: `ПС ${bearing.number}`,
                    characteristics: [],
                };
                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(bearing)) {
                    if (value?.value === null) {
                        break;
                    }
                    let status: StatusType;
                    switch (value.status) {
                        case 'warn':
                            status = StatusType.WARNING;
                            break;
                        case 'alarm':
                            status = StatusType.DANGER;
                            break;
                        default:
                            status = StatusType.DEFAULT;
                            break;
                    }
                    if (Object.values(Characteristics).includes(key as Characteristics)) {
                        res.characteristics.push({
                            type: key as Characteristics,
                            status,
                            value: value.value.toFixed(2) || null,
                        })
                    }
                }
                return res;
            }),
            // TODO: need to get these parameters
            isActive: true,
            date: '',
            forecast: '',
            mainDriveCharacteristics: [
                {
                    status: StatusType.DEFAULT,
                    value: ex.mainDriveRotorCurrent,
                    type: Characteristics.DRIVE_AMPERAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: ex.mainDriveStatorCurrent,
                    type: Characteristics.AMPERAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: ex.mainDriveRotorVoltage,
                    type: Characteristics.ROTOR_VOLTAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: ex.mainDriveStatorVoltage,
                    type: Characteristics.STARTER_VOLTAGE,
                },
            ],
            oilLevel: Number(ex.oilLevel.toFixed(2)),
            oilPressure: Number(ex.oilPressure.toFixed(2)),
            coolerOilTemperatureAfter: Number(ex.coolerOilTemperatureAfter.toFixed(2)),
            coolerOilTemperatureBefore: Number(ex.coolerOilTemperatureBefore.toFixed(2)),
            coolerWaterTemperatureAfter: Number(ex.coolerWaterTemperatureAfter.toFixed(2)),
            coolerWaterTemperatureBefore: Number(ex.coolerWaterTemperatureBefore.toFixed(2)),
            gasValvePosition: ex.gasValvePosition,
            gasValveOpen: ex.gasValveOpen,
            gasValveClosed: ex.gasValveClosed,
            gasCollectorTemperatureBefore: Number(ex.gasCollectorTemperatureBefore.toFixed(2)),
            rotorName: '',
            lastRotorReplacement: '',
        })),
    }))
    return [sinterMachines, response.moment];
}
