import { configureStore } from "@reduxjs/toolkit"
import weatherUnitsReducer from '../features/weather-units//weatherUnitsSlice'

export const store = configureStore({
    reducer: {
        weatherUnits: weatherUnitsReducer,
    }
})  
