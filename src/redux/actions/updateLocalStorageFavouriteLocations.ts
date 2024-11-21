import { localStorageActions } from "../../constants/localStorageActions"
import { localStorageKeys } from "../../constants/localStorageItems"
import { FavouriteLocationType } from "../slices/favouriteLocationsSlice"

export function updateLocalStorageFavouriteLocations(location: FavouriteLocationType, action: localStorageActions = localStorageActions.ADD) {
    const storageKey = localStorageKeys.favourites
    let locations = JSON.parse(localStorage.getItem(storageKey) as string)

    if (!locations) locations = []
    if (action === localStorageActions.ADD) {
        locations.push(location)
        localStorage.setItem(storageKey, JSON.stringify(locations))
    } else if (action === localStorageActions.REMOVE) {
        const index = locations.findIndex((elm: FavouriteLocationType) => elm.id === location.id && elm.lat === location.lat && elm.lon === location.lon)
        if (index !== -1) {
            locations.splice(index, 1)
            localStorage.setItem(storageKey, JSON.stringify(locations))
        }
    }
}