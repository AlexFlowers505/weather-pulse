import { temperatureUnits, temperatureUnitType, UnitsType } from "../../constants/temperatureUnits"
import { getLocalStorageTemperatureUnits } from "../../utils/utils"

export const getInitialUnits = () => {
    const currentUnits = getLocalStorageTemperatureUnits()
    let initialState: temperatureUnitType

    if (currentUnits) {
        currentUnits === UnitsType.imperial
            ? initialState = temperatureUnits.fahrenheit
            : initialState = temperatureUnits.celsius
    } else initialState = temperatureUnits.celsius

    return initialState
}