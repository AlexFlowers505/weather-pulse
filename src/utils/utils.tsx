import { localStorageActions } from "../constants/localStorageActions"
import { localStorageKeys } from "../constants/localStorageItems"
import searchResultsStates from "../constants/searchResultsStates"
import { UnitsType, temperatureUnits, temperatureUnitType } from "../constants/temperatureUnits"
import { FavouriteLocationType } from "../redux/slices/favouriteLocationsSlice"
import { setStateType } from "../types/overalls/overalls"
const { IDLE } = searchResultsStates

export function getRandomItemFromArray(array: any[]): number {
    const randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

export function getRandomNum(min: number = 0, max: number = 100): number {
    const randomNum = Math.floor(Math.random() * (max - min) + min)
    return randomNum
}

export function removeMultipleSpaces(str: string): string {
    return str.replace(/\s\s+/g, ' ')
}

export function getLocalStorageTemperatureUnits() {
    const storageKey = localStorageKeys.temperatureUnits
    const currentUnits = localStorage.getItem(storageKey)

    if (currentUnits) return currentUnits
    else {
        localStorage.setItem(storageKey, temperatureUnits.celsius.__type)
        return temperatureUnits.celsius.__type
    }
}

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

export function setLocalStorageTemperatureUnits(units: string) {
    localStorage.setItem(localStorageKeys.temperatureUnits, units)
}

export function getInitialFavouriteLocations() {
    const storageKey = localStorageKeys.favouriteLocations

    if (localStorage.getItem(storageKey)) return JSON.parse(localStorage.getItem(storageKey) as string)
    else return []
}


export function updateLocalStorageFavouriteLocations(location: FavouriteLocationType, action: localStorageActions = localStorageActions.ADD) {
    const storageKey = localStorageKeys.favouriteLocations
    const locations = JSON.parse(localStorage.getItem(storageKey) as string)

    if (action === localStorageActions.ADD) {
        locations.push(location)
        localStorage.setItem(storageKey, JSON.stringify(locations))
    } else if (action === localStorageActions.REMOVE) {
        const index = locations.findIndex((elm: FavouriteLocationType) => elm.lat === location.lat && elm.lon === location.lon)
        if (index !== -1) {
            locations.splice(index, 1)
            localStorage.setItem(storageKey, JSON.stringify(locations))
        }
    }
}

// AI TYPES HERE
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>
    
    return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), delay)
    }
}

export function handleClearSearchBtnClick(
    inputRef: any = null,
    setFetchState: setStateType<searchResultsStates> | null = null,
    setRepeatFetch: setStateType<boolean> | null = null,
    setRequest: setStateType<string> | null = null,
    request: string | null = null
): void {
    if (setRequest) setRequest('')
    if (setFetchState) setFetchState(IDLE)
    inputRef?.current.focus()
}

export function handleRepeatSearchBtnClick(
    inputRef: any | null = null,
    setFetchState: setStateType<searchResultsStates> | null = null,
    setRepeatFetch: setStateType<boolean> | null = null,
    setRequest: setStateType<string> | null = null,
    request: string | null = null
): void {
    if (setRepeatFetch) setRepeatFetch(prev => !prev)
    inputRef?.current.focus()
}



export function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1)
}

export function refreshPage(): void {
    window.location.reload()
}