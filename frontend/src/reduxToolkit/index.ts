import { configureStore, combineReducers } from '@reduxjs/toolkit'

import exhausterReducer from './slices/exhauster'
import sinter_machines from './slices/sinterMachines'

const rootReducer = combineReducers({
    exhausterReducer,
    sinter_machines,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
