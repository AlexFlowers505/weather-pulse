import FORECAST_ITEMS from "../../constants/forecastItems"
import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { AverageDayNnightWeather } from "./averageDayNnightWeather.type"
import { DayHourlyWeather } from "./dayHourlyWeather"

export type ForecastLayoutProps = {
    heading: string
    layout: FORECAST_LAYOUTS
    itemsType: FORECAST_ITEMS
    extraStyles?: string
    locationData: AverageDayNnightWeather[] | DayHourlyWeather[] | null
  }