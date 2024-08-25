import { createSlice } from "@reduxjs/toolkit";
import { UnitsType } from "../../../constants/temperatureUnits";
import { temperatureUnitType } from "../../../constants/temperatureUnits";
import svgSymbolsIDs from "../../../constants/svgSymbolsIDs";

export type StateType = temperatureUnitType

const initialState: StateType = {
    name: 'Цельсий',
    __type: UnitsType.metric,
    fullName: 'градусы по Цельсию',
    symbol: '℃',
    icon: svgSymbolsIDs.iconCelsius,
}

const weatherUnitsSlice = createSlice({
    name: 'weather-units',
    initialState,
    reducers: {
        switchWeatherUnits: (state, action) => {
            switch (state.__type) {
                case UnitsType.metric:
                    state.name = 'Фаренгейт'
                    state.__type = UnitsType.imperial
                    state.fullName = 'градусы по Фаренгейту'
                    state.symbol = '°F'
                    state.icon = svgSymbolsIDs.iconFahrenheit
                case UnitsType.imperial:
                    state.name = 'Цельсий'
                    state.__type = UnitsType.metric
                    state.fullName = 'градусы по Цельсию'
                    state.symbol = '℃'
                    state.icon = svgSymbolsIDs.iconCelsius             
            }
        },
    }
})

export const { switchWeatherUnits } = weatherUnitsSlice.actions
export default weatherUnitsSlice.reducer