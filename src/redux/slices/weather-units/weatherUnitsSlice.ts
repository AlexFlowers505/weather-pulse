import { createSlice } from '@reduxjs/toolkit'
import { UnitsType, temperatureUnitType, temperatureUnits as units } from "../../../constants/temperatureUnits"
import { getInitialUnits, setLocalStorageTemperatureUnits } from '../../../utils/utils'

export type StateType = temperatureUnitType

const initialState: StateType = getInitialUnits()

const weatherUnitsSlice = createSlice({
    name: 'weather-units',
    initialState,
    reducers: {
        switchWeatherUnits: state => {
            const currentUnits = state.__type
            const newUnits = currentUnits === UnitsType.metric
                ? units.fahrenheit
                : units.celsius
            setLocalStorageTemperatureUnits(newUnits.__type)
            return newUnits
        },
    },
})

export const { switchWeatherUnits } = weatherUnitsSlice.actions
export default weatherUnitsSlice.reducer


