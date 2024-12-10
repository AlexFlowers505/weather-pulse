import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { checkIfFavourite } from "../utils/utils"
import { FavouriteLocationsState } from "../types/components/favouriteLocationsState.type"

export function useCheckStoreIfFavourite(id: number) {
    return useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsState, id))
}