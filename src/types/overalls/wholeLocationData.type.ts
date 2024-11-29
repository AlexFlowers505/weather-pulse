import { LocationWeatherData } from "./locationWeatherData.type"

export type WholeLocationData = LocationWeatherData & { forecast: LocationWeatherData[] }   
