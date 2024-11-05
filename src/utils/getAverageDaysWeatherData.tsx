import { getAverageDayTemperature } from "./getAverageDayTemperature"
import { getAverageDayWeatherIcon } from "./getAverageDayWeatherIcon"
import { DateFormatter } from "./getDateTime"

export const getAverageDaysWeatherData = (fewDaysWeather: any[]) => {
    if (!fewDaysWeather || !Array.isArray(fewDaysWeather)) {
        console.error('Invalid input: fewDaysWeather must be a non-empty array')
        return []
    }

    const averageDayWeather: any[] = []
    fewDaysWeather.forEach((dayWeatherByHours: any) => {
        if (!dayWeatherByHours || !Array.isArray(dayWeatherByHours.forecast) || dayWeatherByHours.forecast.length === 0) {
            console.warn('Invalid dayWeatherByHours data, skipping...')
            return
        }

        const averageDayTemperature = getAverageDayTemperature(dayWeatherByHours.forecast)
        const calendarDay = new DateFormatter(dayWeatherByHours.timestamp).getShortDate(true)
        const weekDay = new DateFormatter(dayWeatherByHours.timestamp).getDayOfWeek(true)
        const averageDayWeatherIcon = getAverageDayWeatherIcon(dayWeatherByHours.forecast)

        averageDayWeather.push({
            timeOrDay: calendarDay,
            weekDay: weekDay,
            temperature: averageDayTemperature,
            icon: averageDayWeatherIcon,
        })
    })
    console.log('averageDayWeather', averageDayWeather)
    return averageDayWeather
}
