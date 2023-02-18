import { useSelector } from 'react-redux';
import { RootState } from '@reduxToolkit/index';
import { useSearchParams } from 'react-router-dom';

import { getExhausterState } from '@reduxToolkit/slices/sinterMachines';
import { StatusType } from '@services/types';

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
    return exhausterState
        ? (
            <Exhauster
                status={StatusType.DEFAULT}
                exhauster={exhausterState}
            />
        ) : null
}

export default ExhausterContainer
