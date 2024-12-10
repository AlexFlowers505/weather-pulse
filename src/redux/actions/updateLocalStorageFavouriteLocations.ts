import { localStorageFavouritesActions } from "../../constants/localStorageFavouritesActions"
import { localStorageKeys } from "../../constants/localStorageItems"
import { FavouriteLocation } from "../../types/components/favouriteLocations.type"

export function updateLocalStorageFavouriteLocations(location: FavouriteLocation, action: localStorageFavouritesActions = localStorageFavouritesActions.ADD) {
    const storageKey = localStorageKeys.favourites
    let locations = JSON.parse(localStorage.getItem(storageKey) as string)

    if (!locations) locations = []
    if (action === localStorageFavouritesActions.ADD) {
        locations.push(location)
        localStorage.setItem(storageKey, JSON.stringify(locations))
    } else if (action === localStorageFavouritesActions.REMOVE) {
        const index = locations.findIndex((elm: FavouriteLocation) => elm.id === location.id)
        if (index !== -1) {
            locations.splice(index, 1)
            localStorage.setItem(storageKey, JSON.stringify(locations))
        }
    }
}