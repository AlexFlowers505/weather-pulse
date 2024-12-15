import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ActiveFavouriteLocation } from '../../types/utils/activeFavouriteLocation.type'

const initialState: ActiveFavouriteLocation = { id : NaN }
const activeFavouriteLocationSlice = createSlice({
	name: 'activeFavouriteLocation',
	initialState,
	reducers: {
        setActiveFavouriteLocation: (state, action: PayloadAction<ActiveFavouriteLocation>) => {
            state.id === action.payload.id ? 
            state.id = NaN : 
            state.id = action.payload.id
        }
	},
})

export const { setActiveFavouriteLocation } = activeFavouriteLocationSlice.actions
export default activeFavouriteLocationSlice.reducer