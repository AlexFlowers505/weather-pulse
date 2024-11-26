import { locationWeatherData } from "../views/pages/AreaOverviewPage"
import { DateFormatter } from "./getDateTime"

export type ForecastByDay = {
    day: string
    timestamp: number
    forecast: locationWeatherData[]
}

export const groupForecastByDay = (weatherData: locationWeatherData[]): ForecastByDay[] | null => {
    if (!weatherData || !Array.isArray(weatherData)) return null

    const weatherByHours = weatherData
    const weatherByDay: ForecastByDay[] = []

    weatherByHours.forEach((elm: locationWeatherData) => {
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
