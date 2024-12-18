import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

export const useIsAnyFavouriteLocationActive = () => {
    const activeFavouriteLocation = useSelector((state: RootState) => state.activeFavouriteLocation)
    return Number.isNaN(activeFavouriteLocation.id)
}