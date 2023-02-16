
import { createSlice } from '@reduxjs/toolkit'
import { StatusType } from '@services/types'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface ExhausterState {
    status: StatusType;
    value: number;
}

const initialState: ExhausterState = {
    status: StatusType.DANGER,
    value: 0,
}

// actions

export const exhausterSlice = createSlice({
    name: 'exhauster',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<number>) {
            state.value = action.payload
        },
    },
})

export const { setData } = exhausterSlice.actions
export const getExhausterState = (state: ExhausterState) => state

export default exhausterSlice.reducer
