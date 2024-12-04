import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { FavouriteLocationsStateType } from "../redux/slices/favouriteLocationsSlice"
import { checkIfspecificLocation } from "../utils/checkIfSpecificLocation"

export function useCheckStoreIfspecificLocation(id: number) {
    return useSelector((state: RootState) => checkIfspecificLocation(state.favouriteLocations as FavouriteLocationsStateType, id))
}