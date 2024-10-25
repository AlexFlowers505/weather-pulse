import { configureStore } from "@reduxjs/toolkit"
import temperatureUnitsReducer from '../slices/temperatureUnitsSlice'
import counterReducer from '../slices/counterSlice'
import locationAccessReducer from '../slices/locationAccessSlice'
import favouriteLocationsReducer from '../slices/favouriteLocationsSlice'

export const store = configureStore({
    reducer: {
        temperatureUnits: temperatureUnitsReducer,
        counter: counterReducer,
        locationAccess: locationAccessReducer,
        favouriteLocations: favouriteLocationsReducer,
    }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
