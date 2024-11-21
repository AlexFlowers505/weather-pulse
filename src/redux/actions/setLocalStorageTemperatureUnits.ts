import { localStorageKeys } from "../../constants/localStorageItems";

export function setLocalStorageTemperatureUnits(units: string) {
    localStorage.setItem(localStorageKeys.temperatureUnits, units)
}