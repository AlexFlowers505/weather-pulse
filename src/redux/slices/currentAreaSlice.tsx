import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { changeLocalStorageCurrentArea } from '../actions/changeLocalStorageCurrentArea'
import { localStorageCurrentAreaActions } from '../../constants/localStorageCurrentAreaActions'

interface CurrentArea {
    id: number,
    isSpecific: boolean,
}

export const initialState: CurrentArea = {
    id: NaN,
    isSpecific: false,
}

const currentAreaSlice = createSlice({
	name: 'currentArea',
	initialState,
	reducers: {
        setCurrentAreaData: (state, action?: PayloadAction<any>) => {
            state.id = action?.payload.id
            state.isSpecific = action?.payload.isSpecific
            changeLocalStorageCurrentArea(action?.payload, localStorageCurrentAreaActions.UPDATE)
        },
        removeCurrentAreaData: (state) => {
            state.id = NaN
            state.isSpecific = false
            changeLocalStorageCurrentArea(initialState, localStorageCurrentAreaActions.REMOVE)
        }
	},
})

export const { setCurrentAreaData, removeCurrentAreaData } = currentAreaSlice.actions
export default currentAreaSlice.reducer

