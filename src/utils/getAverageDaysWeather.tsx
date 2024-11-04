import { getAverageDayTemperature } from "./getAverageDayTemperature"
import { getAverageDayWeatherIcon } from "./getAverageDayWeatherIcon"

export const getAverageDaysWeather = (fewDaysWeather: any[]) => {
    let averageDayWeather: any
    fewDaysWeather.map((dayWeatherByHours: any) => {
        const averageDayTemperature = getAverageDayTemperature(dayWeatherByHours)
        const averageDayWeatherIcon = getAverageDayWeatherIcon(dayWeatherByHours)
        averageDayWeather.push({
            temperature: averageDayTemperature,
            icon: averageDayWeatherIcon
        })
    })

    return averageDayWeather
}