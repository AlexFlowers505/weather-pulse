import { configureStore } from "@reduxjs/toolkit"
import weatherUnitsReducer from '../slices/weather-units/weatherUnitsSlice'
import counterReducer from '../slices/counter/counterSlice'
import locationAccessReducer from '../slices/locationAccess/locationAccessSlice'

export const store = configureStore({
    reducer: {
        weatherUnits: weatherUnitsReducer,
        counter: counterReducer,
        locationAccess: locationAccessReducer,
    }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
