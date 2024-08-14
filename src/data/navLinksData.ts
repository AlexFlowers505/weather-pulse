import svgSymbolsIDs, {svgSymbolsIDsType} from "../constants/svgSymbolsIDs"

type navLinkDataType = {
    text: string
    url: string
    icon: svgSymbolsIDsType[keyof svgSymbolsIDsType]
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