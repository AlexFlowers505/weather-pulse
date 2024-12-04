import { LocationWeatherData } from "./locationWeatherData.type"

export type WholeLocationData = Omit<LocationWeatherData, 'timestamp'> & { forecast: LocationWeatherData[] }

