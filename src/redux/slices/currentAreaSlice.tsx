import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { changeLocalStorageCurrentArea } from '../actions/changeLocalStorageCurrentArea'
import { localStorageCurrentAreaActions } from '../../constants/localStorageCurrentAreaActions'
import { CurrentArea } from '../../types/utils/currentArea.type'
import { getInitialCurrentArea } from '../actions/getInitialCurrentArea'

const initialState: CurrentArea = getInitialCurrentArea()


const currentAreaSlice = createSlice({
	name: 'currentArea',
	initialState,
	reducers: {
        setCurrentAreaData: (state, action: PayloadAction<CurrentArea>) => {
            state.id = action.payload.id
            state.isSpecific = action.payload.isSpecific
            changeLocalStorageCurrentArea(action.payload, localStorageCurrentAreaActions.UPDATE)
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

