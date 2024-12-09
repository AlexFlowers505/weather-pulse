import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { changeLocalStorageCurrentArea } from '../actions/changeLocalStorageCurrentArea'
import { localStorageCurrentAreaActions } from '../../constants/localStorageCurrentAreaActions'
import { getLocalStorageCurrentArea } from '../actions/getLocalStorageCurrentArea'
import { CurrentArea } from '../../types/utils/currentArea.type'

export const initialState: CurrentArea = {
    id: NaN,
    isSpecific: false,
}

const currentAreaSlice = createSlice({
	name: 'currentArea',
	initialState,
	reducers: {
        setCurrentAreaData: (state, action: PayloadAction<CurrentArea>) => {
            state.id = action.payload.id
            state.isSpecific = action.payload.isSpecific
            changeLocalStorageCurrentArea(action.payload, localStorageCurrentAreaActions.UPDATE)
        },
        setCurrentAreaDataFromStorage: (state) => {
            const localStorageCurrentArea = getLocalStorageCurrentArea()
            state.id = localStorageCurrentArea.id
            state.isSpecific = localStorageCurrentArea.isSpecific
        },
        removeCurrentAreaData: (state) => {
            state.id = NaN
            state.isSpecific = false
            changeLocalStorageCurrentArea(initialState, localStorageCurrentAreaActions.REMOVE)
        }
	},
})

export const { setCurrentAreaData, removeCurrentAreaData, setCurrentAreaDataFromStorage } = currentAreaSlice.actions
export default currentAreaSlice.reducer

