import FORECAST_ITEMS from "../../constants/forecastItems"
import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { SvgSymbolsIDs } from "../../styles/components/svgSymbolsIDs.type"
import { AverageDayNnightWeather } from "./averageDayNnightWeather.type"
import { DayHourlyWeather } from "./dayHourlyWeather"
import { TwStylesObject } from "./overalls"

export type ForecastLayoutProps = {
    heading: string
    subHeading?: string
    bgIcon?: SvgSymbolsIDs[keyof SvgSymbolsIDs]
    layout: FORECAST_LAYOUTS
    itemsType: FORECAST_ITEMS
    outerStyles?: TwStylesObject
    outerItemStyles?: TwStylesObject
    extraStyles?: string
    locationData: AverageDayNnightWeather[] | DayHourlyWeather[] | null
  }