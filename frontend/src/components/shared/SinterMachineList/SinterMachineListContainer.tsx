import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxToolkit/index';
import { getSinterMachinesState } from '@reduxToolkit/slices/sinterMachines';

import SinterMachineList from './SinterMachineList';

function SinterMachineListContainer() {
    const sinterMachineState = useSelector(
        ({ sinter_machines }: RootState) => getSinterMachinesState(sinter_machines),
    )
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {
                sinterMachineState.machines
                    ? (
                        <SinterMachineList
                            moment={sinterMachineState.moment}
                            delay={sinterMachineState.delay}
                            sinterMachines={sinterMachineState?.machines}
                        />
                    )
                    : null
            }
        </>
    );
}

export default SinterMachineListContainer;
