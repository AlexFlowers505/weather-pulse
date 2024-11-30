import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { AverageDayNnightWeather } from "./averageDayNnightWeather.type"

export type ForecastDayItemProps = {
    layout: FORECAST_LAYOUTS
    weatherData: AverageDayNnightWeather
}