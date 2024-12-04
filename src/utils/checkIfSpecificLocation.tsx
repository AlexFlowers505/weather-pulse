import { FavouriteLocationsStateType, FavouriteLocationType } from "../redux/slices/favouriteLocationsSlice"

export const checkIfspecificLocation = (state: FavouriteLocationsStateType, id: number): boolean => {
    return state.value.find((elm: FavouriteLocationType) => elm.id === id)?.isSpecific as boolean
}