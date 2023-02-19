import { useSelector } from 'react-redux';
import { RootState } from '@reduxToolkit/index';
import { useSearchParams } from 'react-router-dom';

import { getExhausterState } from '@reduxToolkit/slices/sinterMachines';

import TrendsChart from './TrendsChart';

function TrendsChartContainer() {
    const [search] = useSearchParams()
    const machineId = Number(search.get('machine_id'))
    const exhausterId = Number(search.get('exhauster_id'))
    const exhausterState = useSelector(
        ({
            sinter_machines,
        }: RootState) => getExhausterState(sinter_machines, machineId, exhausterId),
    )

    return exhausterState
        ? (
            <TrendsChart exhauster={exhausterState} />
        ) : null
}

export default TrendsChartContainer
