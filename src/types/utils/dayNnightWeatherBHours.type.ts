import { LocationWeatherData } from "../overalls/locationWeatherData.type"

export type DayNnightWeatherByHours = {
    day: LocationWeatherData[]
    night: LocationWeatherData[]
    averageDay: number
    averageNight: number
}