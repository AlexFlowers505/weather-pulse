import { NIGHT_HOURS } from "../constants/dayNnightHours"
import { WeatherIconsByHours } from "../types/utils/weatherIconsByHours.type"
import { locationWeatherData } from "../views/pages/AreaOverviewPage"
import { DateFormatter } from "./getDateTime"

export const getDayWeatherByHoursIcons = (dayWeatherByHours: locationWeatherData[]) => {
    let weatherIconsByHours: WeatherIconsByHours = {
        day: [],
        night: []
    }
    dayWeatherByHours.map( (hour: locationWeatherData) => {
        const currentHour = new DateFormatter(hour.timestamp).getHours()
        if (NIGHT_HOURS.indexOf(currentHour) === -1) {
            return weatherIconsByHours.day.push(hour.weatherIcon)
        } else {
            return weatherIconsByHours.night.push(hour.weatherIcon)
        }
    })
    return weatherIconsByHours
}