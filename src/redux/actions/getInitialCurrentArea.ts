import { localStorageKeys } from "../../constants/localStorageItems"
import { CurrentArea } from "../../types/utils/currentArea.type"

export function getInitialCurrentArea(): CurrentArea {
    const storageKey = localStorageKeys.currentArea

    if (localStorage.getItem(storageKey)) return JSON.parse(localStorage.getItem(storageKey) as string) as CurrentArea
    else return { id: NaN, isSpecific: false }
}