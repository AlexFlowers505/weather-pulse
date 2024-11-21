import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { localStorageActions } from '../../constants/localStorageActions'
import { getInitialFavouriteLocations } from '../actions/getInitialFavouriteLocations'
import { updateLocalStorageFavouriteLocations } from '../actions/updateLocalStorageFavouriteLocations'

export type FavouriteLocationType = {
    lat: number
    lon: number
    id: number
    area: string
    region: string
    country: string
}
export type FavouriteLocationsStateType = {
    value: Array<FavouriteLocationType>
}

const initialState: FavouriteLocationsStateType = getInitialFavouriteLocations()

const favouriteLocationsSlice = createSlice({
    name: 'favourite-locations',
    initialState,
    reducers: {
        removeLocation: (state, action: PayloadAction<FavouriteLocationType>) => {
            state.value = state.value.filter(elm => elm.id !== action.payload.id && elm.lat !== action.payload.lat && elm.lon !== action.payload.lon)
            updateLocalStorageFavouriteLocations(action.payload, localStorageActions.REMOVE)
        },
        addLocation: (state, action: PayloadAction<FavouriteLocationType>) => {
            state.value.push(action.payload)
            updateLocalStorageFavouriteLocations(action.payload, localStorageActions.ADD)
        },
    },
})

export const { removeLocation, addLocation } = favouriteLocationsSlice.actions
export default favouriteLocationsSlice.reducer


