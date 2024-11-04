import { DateFormatter } from "./getDateTime"

export const groupForecastByDay = (weatherData: any): any[] | null => {
    if (!weatherData || !Array.isArray(weatherData.list)) return null

    const weatherByHours = weatherData.list
    const weatherByDay: any[] = []

    weatherByHours.forEach((elm: any) => {
        if (!elm || typeof elm.dt !== 'number') return

        const day = new DateFormatter(elm.dt).getDay()
        let index = weatherByDay.findIndex(item => item.day === day)

        if (index === -1) {
            weatherByDay.push({ day: day, timestamp: elm.dt, forecast: [elm] })
        } else {
            if (!Array.isArray(weatherByDay[index].forecast)) {
                weatherByDay[index].forecast = []
            }
            weatherByDay[index].forecast.push(elm)
        }
    })

    return weatherByDay
}
