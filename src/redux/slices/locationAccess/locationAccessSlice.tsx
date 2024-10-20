import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import locationAccessStates from '../../../constants/locationAccessStates'


export const locationAccessSlice = createSlice({
    name: 'location-access',
    initialState: { value: locationAccessStates.IDLE },
    reducers: {
        switchLocationAccess(state, action: PayloadAction<locationAccessStates>) {
            state.value = action.payload
        },
    },
});

export const { switchLocationAccess } = locationAccessSlice.actions
export default locationAccessSlice.reducer

