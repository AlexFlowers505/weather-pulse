import { createSlice } from '@reduxjs/toolkit'
import { UnitsType, temperatureUnitType, temperatureUnits as units } from "../../constants/temperatureUnits"
import { getInitialUnits } from '../actions/getInitialUnits'
import { setLocalStorageTemperatureUnits } from '../actions/setLocalStorageTemperatureUnits'

export type StateType = temperatureUnitType

const initialState: StateType = getInitialUnits()

const temperatureUnitsSlice = createSlice({
    name: 'weather-units',
    initialState,
    reducers: {
        switchTemperatureUnits: state => {
            const currentUnits = state.__type
            const newUnits = currentUnits === UnitsType.metric
                ? units.fahrenheit
                : units.celsius
            setLocalStorageTemperatureUnits(newUnits.__type)
            return newUnits
        },
    },
})

export const { switchTemperatureUnits } = temperatureUnitsSlice.actions
export default temperatureUnitsSlice.reducer


