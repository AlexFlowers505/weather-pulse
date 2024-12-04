import { localStorageKeys } from "../constants/localStorageItems"
import searchResultsStates from "../constants/searchResultsStates"
import { temperatureUnits } from "../constants/temperatureUnits"
import { FavouriteLocationsStateType, FavouriteLocationType } from "../redux/slices/favouriteLocationsSlice"
import { setStateType } from "../types/overalls/overalls"
import { AppDispatch } from "../redux/store/store"
import { switchLocationAccess } from "../redux/slices/locationAccessSlice"
import locationAccessStates from "../constants/locationAccessStates"
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

export const checkIfFavourite = (state: FavouriteLocationsStateType, id: number): boolean => {
    return state.value.some((elm: FavouriteLocationType) => elm.id === id)
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

export function handleCloseLocationAccessMessage(dispatch: AppDispatch) {
    dispatch(switchLocationAccess(locationAccessStates.PROMPT))
}

export function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1)
}

export function refreshPage(): void {
    window.location.reload()
}