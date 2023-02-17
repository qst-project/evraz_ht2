import { createSlice } from '@reduxjs/toolkit'
import { ExhausterData, StatusType } from '@services/types'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface ExhausterState {
    status: StatusType;
    exhauster?: ExhausterData;
}

const initialState: ExhausterState = {
    status: StatusType.DANGER,
}

// actions

export const exhausterSlice = createSlice({
    name: 'exhauster',
    initialState,
    reducers: {
        setExhauster(state, action: PayloadAction<ExhausterData>) {
            // eslint-disable-next-line no-param-reassign
            state.exhauster = action.payload;
        },
    },
})

export const { setExhauster } = exhausterSlice.actions
export const getExhausterState = (state: ExhausterState) => state

export default exhausterSlice.reducer
