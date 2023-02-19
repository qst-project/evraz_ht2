import { createSlice } from '@reduxjs/toolkit'
import {
    SinterMachineData,
} from '@services/types'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface SinterMachinesState {
    delay: number;
    webSockerConnectionError: boolean,
    moment: string;
    machines?: SinterMachineData[];
}

const initialState: SinterMachinesState = {
    delay: 0,
    moment: '',
    webSockerConnectionError: true,
}

export const sinterMachinesSlice = createSlice({
    name: 'sinterMachines',
    initialState,
    reducers: {
        setSinterMachines(state, action: PayloadAction<[SinterMachineData[], string, number]>) {
            // eslint-disable-next-line no-param-reassign
            [state.machines, state.moment, state.delay] = action.payload;
        },
        setWebSockerConnectionError(state, action: PayloadAction<boolean>) {
            // eslint-disable-next-line no-param-reassign
            state.webSockerConnectionError = action.payload
        },
        // setPrediction(state, action: PayloadAction<string, number>) {
        //     // eslint-disable-next-line no-param-reassign, @typescript-eslint/naming-convention
           
        // },
    },
})

export const {
    setSinterMachines,
    setWebSockerConnectionError,
    // setPrediction,
} = sinterMachinesSlice.actions
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
export const getWebConnectionError = (state: SinterMachinesState) => state.webSockerConnectionError

export default sinterMachinesSlice.reducer
