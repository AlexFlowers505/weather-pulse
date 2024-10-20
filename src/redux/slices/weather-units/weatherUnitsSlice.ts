import { createSlice } from '@reduxjs/toolkit'
import { UnitsType, temperatureUnitType, temperatureUnits as units } from "../../../constants/temperatureUnits"

export type StateType = temperatureUnitType

const initialState: StateType = {
    name: units.celsius.name,
    __type: units.celsius.__type,
    fullName: units.celsius.fullName,
    symbol: units.celsius.symbol,
    icon: units.celsius.icon,
}

const weatherUnitsSlice = createSlice({
    name: 'weather-units',
    initialState,
    reducers: {
        switchWeatherUnits: state => {
            switch (state.__type) {
                case UnitsType.metric:
                    state.name = units.fahrenheit.name
                    state.__type = units.fahrenheit.__type
                    state.fullName = units.fahrenheit.fullName
                    state.symbol = units.fahrenheit.symbol
                    state.icon = units.fahrenheit.icon
                    break
                case UnitsType.imperial:
                    state.name = units.celsius.name
                    state.__type = units.celsius.__type
                    state.fullName = units.celsius.fullName
                    state.symbol = units.celsius.symbol
                    state.icon = units.celsius.icon
                    break      
            }
        },
    }
})

// refactored yet not so self-explanatory version

// const initialState: StateType = units.celsius
// const weatherUnitsSlice = createSlice({
//     name: 'weather-units',
//     initialState,
//     reducers: {
//         switchWeatherUnits: state => {
//             const currentUnit = state.__type
//             const newUnit = currentUnit === UnitsType.metric
//                 ? units.fahrenheit
//                 : units.celsius
//             return newUnit
//         },
//     },
// })

export const { switchWeatherUnits } = weatherUnitsSlice.actions
export default weatherUnitsSlice.reducer


