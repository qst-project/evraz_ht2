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
}
