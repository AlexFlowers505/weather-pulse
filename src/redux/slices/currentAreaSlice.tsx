import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { changeLocalStorageCurrentArea } from '../actions/changeLocalStorageCurrentArea'
import { localStorageCurrentAreaActions } from '../../constants/localStorageCurrentAreaActions'

interface CurrentArea {
    id: number,
    isSpecific: boolean,
    lat: number,
    lon: number,
    area: string,
    region: string,
    country: string,
}

export const initialState: CurrentArea = {
    id: NaN,
    isSpecific: false,
    lat: NaN,
    lon: NaN,
    area: '',
    region: '',
    country: '',
}

const currentAreaSlice = createSlice({
	name: 'currentArea',
	initialState,
	reducers: {
        setCurrentAreaData: (state, action?: PayloadAction<any>) => {
            state.lat = action?.payload.lat
            state.lon = action?.payload.lon
            state.area = action?.payload.area
            state.region = action?.payload.region
            state.country = action?.payload.country
            changeLocalStorageCurrentArea(action?.payload, localStorageCurrentAreaActions.UPDATE)
        },
        removeCurrentAreaData: (state) => {
            state.lat = NaN
            state.lon = NaN
            state.area = ''
            state.region = ''
            state.country = ''
            changeLocalStorageCurrentArea(initialState, localStorageCurrentAreaActions.REMOVE)
        }
	},
})

export const { setCurrentAreaData, removeCurrentAreaData } = currentAreaSlice.actions
export default currentAreaSlice.reducer

