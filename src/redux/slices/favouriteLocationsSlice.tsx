import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { localStorageFavouritesActions } from '../../constants/localStorageFavouritesActions'
import { getInitialFavouriteLocations } from '../actions/getInitialFavouriteLocations'
import { updateLocalStorageFavouriteLocations } from '../actions/updateLocalStorageFavouriteLocations'
import { FavouriteLocationsState } from '../../types/components/favouriteLocationsState.type'
import { FavouriteLocation } from '../../types/components/favouriteLocations.type'

const initialState: FavouriteLocationsState = getInitialFavouriteLocations()

const favouriteLocationsSlice = createSlice({
    name: 'favourite-locations',
    initialState,
    reducers: {
        removeLocation: (state, action: PayloadAction<FavouriteLocation>) => {
            state.value = state.value.filter(elm => elm.id !== action.payload.id)
            updateLocalStorageFavouriteLocations(action.payload, localStorageFavouritesActions.REMOVE)
        },
        addLocation: (state, action: PayloadAction<FavouriteLocation>) => {
            state.value.push(action.payload)
            updateLocalStorageFavouriteLocations(action.payload, localStorageFavouritesActions.ADD)
        },
    },
})

export const { removeLocation, addLocation } = favouriteLocationsSlice.actions
export default favouriteLocationsSlice.reducer


