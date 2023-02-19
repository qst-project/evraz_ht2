import {
    BearingData,
    Characteristics,
    SinterMachineData,
    SinterMachinesResponse,
    StatusType,
} from '@services/types';

export const mapSinterMachinesResponse = (response: SinterMachinesResponse)
    : [SinterMachineData[], string] => {
    const sinterMachines: SinterMachineData[] = response.machines?.map((machine) => ({
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
                            value: {
                                value: value.value.value?.toFixed(2) || null,
                                moment: new Date(new Date(value.value?.moment).valueOf() - (new Date().getTimezoneOffset() * 60000)).toLocaleString('ru'),
                            },
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
                            value: {
                                value: value.value.value?.toFixed(2) || null,
                                moment: new Date(
                                    new Date(value.value?.moment).valueOf()
                                    - (new Date().getTimezoneOffset() * 60000)
                                ).toLocaleString('ru'),
                            },
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
                    value: {
                        value: Number(ex?.mainDriveRotorCurrent?.value?.toFixed(2)) || '',
                        moment: new Date(
                            new Date(ex?.mainDriveRotorCurrent?.moment).valueOf()
                            - (new Date().getTimezoneOffset() * 60000)
                        ).toLocaleString('ru') || '',
                    },
                    type: Characteristics.DRIVE_AMPERAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: {
                        value: Number(ex?.mainDriveStatorCurrent?.value.toFixed(2)) || '',
                        moment: new Date(
                            new Date(ex?.mainDriveStatorCurrent?.moment).valueOf()
                            - (new Date().getTimezoneOffset() * 60000)
                        ).toLocaleString('ru') || '',
                    },
                    type: Characteristics.AMPERAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: {
                        value: ex?.mainDriveRotorVoltage?.value.toFixed(2) || '',
                        moment: new Date(
                            new Date(ex?.mainDriveRotorVoltage?.moment).valueOf()
                            - (new Date().getTimezoneOffset() * 60000)
                        ).toLocaleString('ru') || '',
                    },
                    type: Characteristics.ROTOR_VOLTAGE,
                },
                {
                    status: StatusType.DEFAULT,
                    value: {
                        value: ex?.mainDriveStatorVoltage?.value.toFixed(2) || '',
                        moment: new Date(
                            new Date(ex?.mainDriveStatorVoltage?.moment).valueOf()
                            - (new Date().getTimezoneOffset() * 60000)
                        ).toLocaleString('ru') || '',
                    },
                    type: Characteristics.STARTER_VOLTAGE,
                },
            ],
            oilLevel: {
                value: Number(ex.oilLevel?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.oilLevel?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            oilPressure: {
                value: Number(ex.oilPressure?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.oilPressure?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            coolerOilTemperatureAfter: {
                value: Number(ex.coolerOilTemperatureAfter?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.coolerOilTemperatureAfter?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            coolerOilTemperatureBefore: {
                value: Number(ex.coolerOilTemperatureBefore?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.coolerOilTemperatureBefore?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            coolerWaterTemperatureAfter: {
                value: Number(ex.coolerWaterTemperatureAfter?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.coolerWaterTemperatureAfter?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            coolerWaterTemperatureBefore:{
                value: Number(ex.coolerWaterTemperatureBefore?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.coolerWaterTemperatureBefore?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            gasValvePosition: {
                value: ex.gasValvePosition?.value,
                moment: new Date(
                    new Date(ex?.gasValvePosition?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            gasValveOpen: ex.gasValveOpen?.value,
            gasValveClosed: ex.gasValveClosed?.value,
            gasCollectorTemperatureBefore:
            {
                value: Number(ex.gasCollectorTemperatureBefore?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.gasCollectorTemperatureBefore?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            gasCollectorUnderPressureBefore:
            {
                value: Number(ex.gasCollectorUnderPressureBefore?.value.toFixed(2)),
                moment: new Date(
                    new Date(ex?.gasCollectorUnderPressureBefore?.moment).valueOf()
                    - (new Date().getTimezoneOffset() * 60000)
                ).toLocaleString('ru') || '',
            },
            rotorName: '',
            lastRotorReplacement: '',
        })),
    }))
    return [sinterMachines, '20220.02.03'];
}
