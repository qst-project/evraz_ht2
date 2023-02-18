import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { DAY } from '@services/constants';

export interface TrendsState {
    dateFrom: number,
    dateTo: number,
}

const initialState: TrendsState = {
    dateFrom: Date.now() - DAY,
    dateTo: Date.now(),
}

// actions

export const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {
        setDateFrom(state, action: PayloadAction<number>) {
            // eslint-disable-next-line no-param-reassign
            state.dateFrom = action.payload;
        },
        setDateTo(state, action: PayloadAction<number>) {
            // eslint-disable-next-line no-param-reassign
            state.dateTo = action.payload;
        },
    },
})

export const {
    setDateFrom,
    setDateTo,
} = trendsSlice.actions
export const getTrendsState = (state: TrendsState) => state

export default trendsSlice.reducer
