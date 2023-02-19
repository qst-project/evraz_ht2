import { useSelector } from 'react-redux';
import { RootState } from '@reduxToolkit/index';
import { useSearchParams } from 'react-router-dom';

import { getExhausterState, getSinterMachinesTiming } from '@reduxToolkit/slices/sinterMachines';
import { ExhausterData } from '@services/types';

import Exhauster from './Exhauster';

function ExhausterContainer() {
    const [search] = useSearchParams()
    const machineId = Number(search.get('machine_id'))
    const exhausterId = Number(search.get('exhauster_id'))
    const exhausterState = useSelector(
        ({
            sinter_machines,
        }: RootState) => getExhausterState(sinter_machines, machineId, exhausterId),
    )
    const timing = useSelector(
        ({
            sinter_machines,
        }: RootState) => getSinterMachinesTiming(sinter_machines),
    )
    return exhausterState
        ? (
            <Exhauster
                moment={timing[0] as string}
                delay={timing[1] as number}
                exhauster={exhausterState as ExhausterData}
            />
        ) : null
}

export default ExhausterContainer
