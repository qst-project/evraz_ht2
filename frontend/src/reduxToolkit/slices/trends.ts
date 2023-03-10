import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { DAY } from '@services/constants';

export interface TrendsState {
    exhauster: undefined,
    dateFrom: number,
    dateTo: number,
    selectedOptions: string[],
    isLoading: boolean,
}

const initialState: TrendsState = {
    exhauster: undefined,
    dateFrom: Date.now() - DAY,
    dateTo: Date.now(),
    selectedOptions: [],
    isLoading: false,
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
        addOption(state, action: PayloadAction<string>) {
            // eslint-disable-next-line no-param-reassign
            state.selectedOptions.push(action.payload);
        },
        removeOption(state, action: PayloadAction<string>) {
            // eslint-disable-next-line no-param-reassign
            state.selectedOptions = state
                .selectedOptions.filter((option) => option !== action.payload);
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            // eslint-disable-next-line no-param-reassign
            state.isLoading = action.payload;
        },
    },
})

export const {
    setDateFrom,
    setDateTo,
    addOption,
    removeOption,
    setIsLoading,
} = trendsSlice.actions
export const getTrendsState = (state: TrendsState) => state

export default trendsSlice.reducer
