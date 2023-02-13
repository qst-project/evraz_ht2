import React from 'react';
import { Characteristics, SinterMachineData, StatusType } from '@services/types';
import SinterMachineList from './SinterMachineList';

const mock: SinterMachineData[] = [
  {
    id: 1,
    name: 'Агломашина №1',
    exhausters: [
      {
        id: 1,
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
                status: StatusType.Default,
              },
            ],
          },
          {
            name: '№8 п-к',
            characteristics: [
              {
                name: Characteristics.OIL_LEVEL,
                status: StatusType.Default,
              },
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Default,
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
                status: StatusType.Warning,
              },
            ],
          },
          {
            name: '№3 п-к',
            characteristics: [
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Danger,
              },
            ],
          },
        ],
      },
      {
        id: 2,
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
                status: StatusType.Default,
              },
            ],
          },
          {
            name: '№8 п-к',
            characteristics: [
              {
                name: Characteristics.OIL_LEVEL,
                status: StatusType.Default,
              },
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Default,
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
                status: StatusType.Warning,
              },
            ],
          },
          {
            name: '№3 п-к',
            characteristics: [
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Danger,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Агломашина №2',
    exhausters: [
      {
        id: 1,
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
                status: StatusType.Default,
              },
            ],
          },
          {
            name: '№8 п-к',
            characteristics: [
              {
                name: Characteristics.OIL_LEVEL,
                status: StatusType.Default,
              },
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Default,
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
                status: StatusType.Warning,
              },
            ],
          },
          {
            name: '№3 п-к',
            characteristics: [
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Danger,
              },
            ],
          },
        ],
      },
      {
        id: 2,
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
                status: StatusType.Default,
              },
            ],
          },
          {
            name: '№8 п-к',
            characteristics: [
              {
                name: Characteristics.OIL_LEVEL,
                status: StatusType.Default,
              },
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Default,
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
                status: StatusType.Warning,
              },
            ],
          },
          {
            name: '№3 п-к',
            characteristics: [
              {
                name: Characteristics.TEMPERATURE,
                status: StatusType.Danger,
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
