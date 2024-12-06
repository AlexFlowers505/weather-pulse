import { SvgSymbolsIDs } from "../../styles/components/svgSymbolsIDs.type"

type NavLink = {
    text: string
    url: string
    icon: SvgSymbolsIDs[keyof SvgSymbolsIDs]
}
export type NavLinks = NavLink[]