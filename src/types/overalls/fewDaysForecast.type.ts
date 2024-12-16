import { ExplicitLocationWeather } from "../api/openWeatherMap/ExplicitLocationWeather.type"
import { LocationWeatherData } from "./locationWeatherData.type"
import { TwStylesObject } from "./overalls"

export type FewDaysForecastProps = {
    locationData: Omit<LocationWeatherData, 'timestamp'> & ExplicitLocationWeather | null
    extraStyles?: string
    outerStyles?: TwStylesObject
    outerItemStyles?: TwStylesObject
  }