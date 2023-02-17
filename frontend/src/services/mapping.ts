import {
    SinterMachineData,
    KafkaMessage,
    KafkaSinteringMachine,
    BearingData,
    ExhausterData,
} from '@services/types';

function FromKafka({ moment, machines }: KafkaMessage): SinterMachineData[] {
    let sinterMachinesData: SinterMachineData[]
    machines.forEach((machine) => {
        let exhaustersData: ExhausterData[]
        let otherBearings: BearingData[]
        machine.exhausters.forEach((exhauster) => {
            exhauster.bearings
            exhausters.push({
                isActive: false,
                name: exhauster.name,
                rotorName: exhauster.rotorName,
                date: moment,
                lastRotorReplacement: '',
                forecast: '',
                bearings: [],
                problems: [],
            })
        })
        sinterMachinesData.push({
            name: machine.number,
            exhausters: exhaustersData,
        })
    })

    return sinterMachinesData
}

export default FromKafka
