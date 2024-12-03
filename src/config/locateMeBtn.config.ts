import { btnContentType } from "../constants/btnContentType"
import svgSymbolsIDs from "../constants/svgSymbolsIDs"
import { geolocationBlockConfig as config } from "./components/geolocationBlock.config"

export const locateMeBtnConfig = {
    content: svgSymbolsIDs.iconLocation,
    contentType: btnContentType.icon,
    defaultTooltipContent: config.btnContent.defaultFullText,
  }