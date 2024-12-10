import { localStorageCurrentAreaActions } from "../../constants/localStorageCurrentAreaActions"
import { localStorageKeys } from "../../constants/localStorageItems"
import { CurrentArea } from "../../types/utils/currentArea.type"

export function changeLocalStorageCurrentArea(location: CurrentArea, action: localStorageCurrentAreaActions = localStorageCurrentAreaActions.UPDATE) {
    const storageKey = localStorageKeys.currentArea

    if (action === localStorageCurrentAreaActions.UPDATE) {
        localStorage.setItem(storageKey, JSON.stringify(location))
    } else if (action === localStorageCurrentAreaActions.REMOVE) {
        localStorage.removeItem(storageKey)
    }
}