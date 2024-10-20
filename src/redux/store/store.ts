import { configureStore } from "@reduxjs/toolkit"
import weatherUnitsReducer from '../slices/weather-units/weatherUnitsSlice'
import counterReducer from '../slices/counter/counterSlice'

export const store = configureStore({
    reducer: {
        weatherUnits: weatherUnitsReducer,
        counter: counterReducer,
    }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
