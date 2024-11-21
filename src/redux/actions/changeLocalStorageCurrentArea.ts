import { localStorageCurrentAreaActions } from "../../constants/localStorageCurrentAreaActions"
import { localStorageKeys } from "../../constants/localStorageItems"
import { FavouriteLocationType } from "../slices/favouriteLocationsSlice"

export function changeLocalStorageCurrentArea(location: FavouriteLocationType, action: localStorageCurrentAreaActions = localStorageCurrentAreaActions.UPDATE) {
    const storageKey = localStorageKeys.currentArea

    if (action === localStorageCurrentAreaActions.UPDATE) {
        localStorage.setItem(storageKey, JSON.stringify(location))
    } else if (action === localStorageCurrentAreaActions.REMOVE) {
        localStorage.removeItem(storageKey)
    }
}