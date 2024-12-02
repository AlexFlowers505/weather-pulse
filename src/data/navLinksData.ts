import svgSymbolsIDs from "../constants/svgSymbolsIDs"
import { SvgSymbolsIDs } from "../styles/components/svgSymbolsIDs.type"

type navLinkDataType = {
    text: string
    url: string
    icon: SvgSymbolsIDs[keyof SvgSymbolsIDs]
}
type navLinksDataType = navLinkDataType[]

const navLinksData: navLinksDataType =[
    {
        text: 'Погода',
        url: '/forecast',
        icon: svgSymbolsIDs.iconWeather,
    },
    {
        text: 'Избранное',
        url: '/favourites',
        icon: svgSymbolsIDs.iconAddToFavourite,
    },
]

export default navLinksData