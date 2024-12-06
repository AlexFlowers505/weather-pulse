import { useSelector } from "react-redux"
import svgSymbolsIDs from "../../constants/svgSymbolsIDs"
import { NavLinks } from "../../types/components/navlinks.type"
import { RootState } from "../../redux/store/store"
import { PATHS, URL_PARAMS } from "../../constants/paths"

const currentArea = useSelector((state: RootState) => ({
    id: state.currentArea.id,
    isSpecific: state.currentArea.isSpecific
}))
const forecastLinkCompletion = currentArea.id ? `?${URL_PARAMS.ID}=${currentArea.id}&${URL_PARAMS.IS_SPECIFIC_LOCATION}=${currentArea.isSpecific ? '1' : '0'}` : ''

export const navbarConfig: NavLinks = [
    {
        text: 'Погода',
        url: `/${PATHS.FORECAST}${forecastLinkCompletion}`,
        icon: svgSymbolsIDs.iconWeather,
    },
    {
        text: 'Избранное',
        url: `/${PATHS.FAVOURITES}`,
        icon: svgSymbolsIDs.iconAddToFavourite,
    },
]


