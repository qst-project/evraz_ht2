import { Characteristics, ExhausterData, StatusType } from '@services/types';

export const exhausterMock: ExhausterData = {
    name: 'EXHAUSTER NAME',
    isActive: true,
    date: '',
    forecast: '',
    rotorName: '',
    id: 1,
    lastRotorReplacement: '',
    sinterMachineId: 1,
    bearings: [
        {
            number: 1,
            name: 'PS 1',
            characteristics: [
                {
                    type: Characteristics.TEMPERATURE,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
            ],
        },
        {
            number: 2,
            name: 'PS 2',
            characteristics: [
                {
                    type: Characteristics.TEMPERATURE,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
            ],
        },
        {
            number: 3,
            name: 'PS 3',
            characteristics: [
                {
                    type: Characteristics.TEMPERATURE,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.HORIZONTAL,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.VERTICAL,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.AXIS,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
            ],
        },
        {
            number: 4,
            name: 'PS 4',
            characteristics: [
                {
                    type: Characteristics.TEMPERATURE,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.HORIZONTAL,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.VERTICAL,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
                {
                    type: Characteristics.AXIS,
                    status: StatusType.DEFAULT,
                    value: 1,
                },
            ],
        },
    ],
    problems: [],
    mainDriveCharacteristics: [],
    oilLevel: 0,
    oilPressure: 0,
    coolerOilTemperatureAfter: 0,
    coolerOilTemperatureBefore: 0,
    coolerWaterTemperatureAfter: 0,
    coolerWaterTemperatureBefore: 0,
    gasValveClosed: true,
    gasValveOpen: true,
    gasValvePosition: 0,
    gasCollectorTemperatureBefore: 0,
    gasCollectorUnderPressureBefore: 0,
}
