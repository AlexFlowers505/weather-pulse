import { FavouriteLocation } from "../types/components/favouriteLocation.type"
import { FavouriteLocationsState } from "../types/components/favouriteLocationsState.type"

export const checkIfspecificLocation = (state: FavouriteLocationsState, id: number): boolean => {
    return state.value.find((elm: FavouriteLocation) => elm.id === id)?.isSpecific as boolean
}