import { NIGHT_HOURS } from "../constants/dayNnightHours"
import { LocationWeatherData } from "../types/overalls/locationWeatherData.type"
import { WeatherIconsByHours } from "../types/utils/weatherIconsByHours.type"
import { DateFormatter } from "./getDateTime"

export const getDayWeatherByHoursIcons = (dayWeatherByHours: LocationWeatherData[]) => {
    let weatherIconsByHours: WeatherIconsByHours = {
        day: [],
        night: []
    }
    dayWeatherByHours.map( (hour: LocationWeatherData) => {
        const currentHour = new DateFormatter(hour.timestamp).getHours()
        if (NIGHT_HOURS.indexOf(currentHour) === -1) {
            return weatherIconsByHours.day.push(hour.weatherIcon)
        } else {
            return weatherIconsByHours.night.push(hour.weatherIcon)
        }
    })
    return weatherIconsByHours
}