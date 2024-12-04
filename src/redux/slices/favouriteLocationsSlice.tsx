import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { localStorageFavouritesActions } from '../../constants/localStorageFavouritesActions'
import { getInitialFavouriteLocations } from '../actions/getInitialFavouriteLocations'
import { updateLocalStorageFavouriteLocations } from '../actions/updateLocalStorageFavouriteLocations'

export type FavouriteLocationType = {
    id: number
    isSpecific: boolean
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
            state.value = state.value.filter(elm => elm.id !== action.payload.id)
            updateLocalStorageFavouriteLocations(action.payload, localStorageFavouritesActions.REMOVE)
        },
        addLocation: (state, action: PayloadAction<FavouriteLocationType>) => {
            state.value.push(action.payload)
            updateLocalStorageFavouriteLocations(action.payload, localStorageFavouritesActions.ADD)
        },
    },
})

export const { removeLocation, addLocation } = favouriteLocationsSlice.actions
export default favouriteLocationsSlice.reducer


