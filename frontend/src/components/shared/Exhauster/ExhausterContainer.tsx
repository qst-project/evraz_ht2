import { useSelector } from 'react-redux';
import { RootState } from '@reduxToolkit/index';

import { getExhausterState } from '@reduxToolkit/slices/sinter_machines';
import { StatusType } from '@services/types';

import Exhauster from './Exhauster';

function ExhausterContainer() {
    const exhausterState = useSelector(
        ({ sinter_machines }: RootState) => getExhausterState(sinter_machines, 0, 0),
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
