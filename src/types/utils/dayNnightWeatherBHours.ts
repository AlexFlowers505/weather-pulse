import { locationWeatherData } from "../../views/pages/AreaOverviewPage"

export type DayNnightWeatherByHours = {
    day: locationWeatherData[]
    night: locationWeatherData[]
    averageDay: number
    averageNight: number
}