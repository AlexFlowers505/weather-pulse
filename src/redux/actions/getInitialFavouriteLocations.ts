import { localStorageKeys } from "../../constants/localStorageItems"

export function getInitialFavouriteLocations() {
    const storageKey = localStorageKeys.favourites

    if (localStorage.getItem(storageKey)) return { value: JSON.parse(localStorage.getItem(storageKey) as string) }
    else return {value: []}
}