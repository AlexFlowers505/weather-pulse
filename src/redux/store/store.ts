import { configureStore } from "@reduxjs/toolkit"
import temperatureUnitsReducer from '../slices/temperatureUnitsSlice'
import counterReducer from '../slices/counterSlice'
import locationAccessReducer from '../slices/locationAccessSlice'
import favouriteLocationsReducer from '../slices/favouriteLocationsSlice'
import dialogReducer from '../slices/dialogSlice'
import currentAreaReducer from '../slices/currentAreaSlice'

export const store = configureStore({
    reducer: {
        temperatureUnits: temperatureUnitsReducer,
        counter: counterReducer,
        locationAccess: locationAccessReducer,
        favouriteLocations: favouriteLocationsReducer,
        dialog: dialogReducer,
        currentArea: currentAreaReducer,
    }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
