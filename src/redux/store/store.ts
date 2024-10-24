import { configureStore } from "@reduxjs/toolkit"
import temperatureUnitsReducer from '../slices/temperatureUnits/temperatureUnitsSlice'
import counterReducer from '../slices/counter/counterSlice'
import locationAccessReducer from '../slices/locationAccess/locationAccessSlice'

export const store = configureStore({
    reducer: {
        temperatureUnits: temperatureUnitsReducer,
        counter: counterReducer,
        locationAccess: locationAccessReducer,
    }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
