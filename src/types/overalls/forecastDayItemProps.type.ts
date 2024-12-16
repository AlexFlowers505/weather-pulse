import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { AverageDayNnightWeather } from "./averageDayNnightWeather.type"
import { TwStylesObject } from "./overalls"

export type ForecastDayItemProps = {
    layout: FORECAST_LAYOUTS
    weatherData: AverageDayNnightWeather
    outerItemStyles?: TwStylesObject
}