import { localStorageCurrentAreaActions } from "../../constants/localStorageCurrentAreaActions"
import { localStorageKeys } from "../../constants/localStorageItems"
import { FavouriteLocation } from "../../types/components/favouriteLocations.type"

export function changeLocalStorageCurrentArea(location: FavouriteLocation, action: localStorageCurrentAreaActions = localStorageCurrentAreaActions.UPDATE) {
    const storageKey = localStorageKeys.currentArea

    if (action === localStorageCurrentAreaActions.UPDATE) {
        localStorage.setItem(storageKey, JSON.stringify(location))
    } else if (action === localStorageCurrentAreaActions.REMOVE) {
        localStorage.removeItem(storageKey)
    }
}