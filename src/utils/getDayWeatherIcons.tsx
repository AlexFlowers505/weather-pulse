import { hoursToIgnoreWhileGettingAverageWeather } from "../constants/hoursToIgnoreWhileGettingAverageWeather"
import { DateFormatter } from "./getDateTime"

export const getDayWeatherIcons = (dayWeatherByHours: String[]) => {
    const dayWeatherIcons = dayWeatherByHours.map( (hour: any) => {
        const currentHour = new DateFormatter(hour.dt).getHours()
        if (hoursToIgnoreWhileGettingAverageWeather.indexOf(currentHour) === -1) {
            return hour?.weather?.[0]?.icon
        }
    })

    return dayWeatherIcons
}