import { createSlice } from '@reduxjs/toolkit'
import {
    SinterMachineData,
} from '@services/types'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface SinterMachinesState {
    delay: number;
    moment: string;
    machines?: SinterMachineData[];
}

const initialState: SinterMachinesState = {
    delay: 0,
    moment: '',
}

export const sinterMachinesSlice = createSlice({
    name: 'sinterMachines',
    initialState,
    reducers: {
        setSinterMachines(state, action: PayloadAction<[SinterMachineData[], string, number]>) {
            // eslint-disable-next-line no-param-reassign
            [state.machines, state.moment, state.delay] = action.payload;
        },
    },
})

export const { setSinterMachines } = sinterMachinesSlice.actions
export const getSinterMachinesState = (state: SinterMachinesState) => state
export const getExhausterState = (
    state: SinterMachinesState,
    sinterMachineNumber: number,
    exhausterNumber: number,
) => (
    state.machines
        ? state.machines
            .find((machine) => machine.id === sinterMachineNumber)?.exhausters
            .find((exhauster) => exhauster.id === exhausterNumber)
        : null
)
export const getSinterMachinesTiming = (state: SinterMachinesState) => [state.moment, state.delay]

export default sinterMachinesSlice.reducer
