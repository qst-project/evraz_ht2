import React from 'react';
import { Characteristics, SinterMachineData, StatusType } from '@services/types';
import SinterMachineList from './SinterMachineList';

const mock: SinterMachineData[] = [
    {
        name: 'Агломашина №1',
        exhausters: [
            {
                name: 'Эксгаустер У-171',
                isActive: false,
                rotorName: 'Ротор №35к',
                date: '12.02.2022',
                lastRotorReplacement: '6 сут',
                forecast: '12 сут',
                bearings: [
                    {
                        name: '№7 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№8 п-к',
                        characteristics: [
                            {
                                name: Characteristics.OIL_LEVEL,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                ],
                problems: [
                    {
                        name: '№9 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.WARNING,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№3 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DANGER,
                                value: 0,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Эксгаустер У-172',
                isActive: true,
                rotorName: 'Ротор №35к',
                date: '12.02.2022',
                lastRotorReplacement: '6 сут',
                forecast: '12 сут',
                bearings: [
                    {
                        name: '№7 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№8 п-к',
                        characteristics: [
                            {
                                name: Characteristics.OIL_LEVEL,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                ],
                problems: [
                    {
                        name: '№9 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.WARNING,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№3 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DANGER,
                                value: 0,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Агломашина №2',
        exhausters: [
            {
                name: 'Эксгаустер У-171',
                isActive: true,
                rotorName: 'Ротор №35к',
                date: '12.02.2022',
                lastRotorReplacement: '6 сут',
                forecast: '12 сут',
                bearings: [
                    {
                        name: '№7 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№8 п-к',
                        characteristics: [
                            {
                                name: Characteristics.OIL_LEVEL,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                ],
                problems: [
                    {
                        name: '№9 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.WARNING,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№3 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DANGER,
                                value: 0,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Эксгаустер У-172',
                isActive: false,
                rotorName: 'Ротор №35к',
                date: '12.02.2022',
                lastRotorReplacement: '6 сут',
                forecast: '12 сут',
                bearings: [
                    {
                        name: '№7 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№8 п-к',
                        characteristics: [
                            {
                                name: Characteristics.OIL_LEVEL,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DEFAULT,
                                value: 0,
                            },
                        ],
                    },
                ],
                problems: [
                    {
                        name: '№9 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.WARNING,
                                value: 0,
                            },
                        ],
                    },
                    {
                        name: '№3 п-к',
                        characteristics: [
                            {
                                name: Characteristics.TEMPERATURE,
                                status: StatusType.DANGER,
                                value: 0,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function SinterMachineListContainer() {
    return (
        <SinterMachineList sinterMachines={mock} />
    );
}

export default SinterMachineListContainer;
