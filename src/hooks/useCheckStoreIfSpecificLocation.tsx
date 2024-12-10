import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { checkIfspecificLocation } from "../utils/checkIfSpecificLocation"
import { FavouriteLocationsState } from "../types/components/favouriteLocationsState.type"

export function useCheckStoreIfspecificLocation(id: number) {
    return useSelector((state: RootState) => checkIfspecificLocation(state.favouriteLocations as FavouriteLocationsState, id))
}