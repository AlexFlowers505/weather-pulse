import { hoursToIgnoreWhileGettingAverageWeather } from "../constants/hoursToIgnoreWhileGettingAverageWeather"
import { locationWeatherData } from "../views/pages/AreaOverviewPage"
import { DateFormatter } from "./getDateTime"
import { ForecastByDay } from "./groupForecastByDay"

export const getDayWeatherIcons = (dayWeatherByHours: locationWeatherData[]) => {
    const dayWeatherIcons = dayWeatherByHours.map( (hour: locationWeatherData) => {
        const currentHour = new DateFormatter(hour.timestamp).getHours()
        if (hoursToIgnoreWhileGettingAverageWeather.indexOf(currentHour) === -1) {
            return hour.weatherIcon
        }
    })

    return dayWeatherIcons
}