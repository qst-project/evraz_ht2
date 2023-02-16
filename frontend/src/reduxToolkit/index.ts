import { configureStore, combineReducers } from '@reduxjs/toolkit'

import exhausterReducer from './slices/exhauster'

const rootReducer = combineReducers({
    exhausterReducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
