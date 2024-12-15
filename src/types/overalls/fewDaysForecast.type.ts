import { ExplicitLocationWeather } from "../api/openWeatherMap/ExplicitLocationWeather.type"
import { LocationWeatherData } from "./locationWeatherData.type"
import { WholeLocationData } from "./wholeLocationData.type"

export type FewDaysForecastProps = {
    locationData: Omit<LocationWeatherData, 'timestamp'> & ExplicitLocationWeather | null
    extraStyles?: string
    outerStyles?: string
  }