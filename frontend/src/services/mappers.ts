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
            rotorName: '',
            lastRotorReplacement: '',
        })),
    }))
    return [sinterMachines, response.moment];
}
