import { LocationWeatherData } from "../types/overalls/locationWeatherData.type"
import { DateFormatter } from "./getDateTime"

export type ForecastByDay = {
    day: string
    timestamp: number
    forecast: LocationWeatherData[]
}

export const groupForecastByDay = (weatherData: LocationWeatherData[]): ForecastByDay[] | null => {
    if (!weatherData || !Array.isArray(weatherData)) return null

    const weatherByHours = weatherData
    const weatherByDay: ForecastByDay[] = []

    weatherByHours.forEach((elm: LocationWeatherData) => {
        if (!elm || typeof elm.timestamp !== 'number') return

        const day = new DateFormatter(elm.timestamp).getDay()
        let index = weatherByDay.findIndex(item => item.day === day)

        if (index === -1) {
            weatherByDay.push({ day: day, timestamp: elm.timestamp, forecast: [elm] })
        } else {
            if (!Array.isArray(weatherByDay[index].forecast)) {
                weatherByDay[index].forecast = []
            }
            weatherByDay[index].forecast.push(elm)
        }
    })
    return weatherByDay
}
