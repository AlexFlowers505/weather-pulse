import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { checkIfFavourite } from "../utils/utils"
import { FavouriteLocationsStateType } from "../redux/slices/favouriteLocationsSlice"

export function useCheckStoreIfFavourite(id: number) {
    return useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsStateType, id))
}