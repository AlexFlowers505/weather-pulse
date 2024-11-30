import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { DayHourlyWeather } from "./dayHourlyWeather"

export type ForecastHourItemProps = {
    layout: FORECAST_LAYOUTS
    weatherData: DayHourlyWeather
}