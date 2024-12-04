import { ExplicitLocationWeather } from "../api/openWeatherMap/ExplicitLocationWeather.type"
import { LocationInfo } from "./locationInfo.type"
import { LocationWeatherData } from "./locationWeatherData.type"

export type WholeLocationData = 
    Omit<LocationWeatherData, 'timestamp'> &
    ExplicitLocationWeather & 
    LocationInfo &
    { isSpecificLocation: boolean } 

