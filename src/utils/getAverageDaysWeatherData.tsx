import { AverageDayNnightWeather } from "../types/overalls/averageDayNnightWeather.type"
import { KeyDayNnightIcons } from "../types/overalls/keyDayNnightIcons.type"
import { DayNnightWeatherByHours } from "../types/utils/dayNnightWeatherBHours.type"
import { getAverageDayNnightTemperature } from "./getAverageDayNnightTemperature"
import { getAverageDayNnightWeatherIcons } from "./getAverageDayNnightWeatherIcons"
import { DateFormatter } from "./getDateTime"
import { ForecastByDay } from "./groupForecastByDay"

export const getAverageDaysWeatherData = (fewDaysWeather: ForecastByDay[], isTodayIncluded: boolean = true) => {
    if (!fewDaysWeather || !Array.isArray(fewDaysWeather)) {
        console.error('Invalid input: fewDaysWeather must be a non-empty array')
        return []
    }
    const averageDayWeather: AverageDayNnightWeather[] = []
    fewDaysWeather.forEach((dayWeatherByHours: ForecastByDay) => {
        if (!dayWeatherByHours || !Array.isArray(dayWeatherByHours.forecast) || dayWeatherByHours.forecast.length === 0) {
            console.warn('Invalid dayWeatherByHours data, skipping...')
            return
        }
        const todayDate = String(new Date().getDate()).padStart(2, '0')
        const dateInCheck = dayWeatherByHours.day
        
        if (isTodayIncluded || todayDate !== dateInCheck) {
            const averageDayTemperatures: DayNnightWeatherByHours = getAverageDayNnightTemperature(dayWeatherByHours.forecast)
            const calendarDay = new DateFormatter(dayWeatherByHours.timestamp).getShortDate(true)
            const weekDay = new DateFormatter(dayWeatherByHours.timestamp).getDayOfWeek(true)
            const averageDayNnightWeatherIcons: KeyDayNnightIcons = getAverageDayNnightWeatherIcons(dayWeatherByHours.forecast)
            averageDayWeather.push({
                timeOrDay: calendarDay,
                weekDay: weekDay,
                temperature: {
                    day:averageDayTemperatures.averageDay,
                    night:averageDayTemperatures.averageNight
                },
                icon: {
                    day: averageDayNnightWeatherIcons.day,
                    night: averageDayNnightWeatherIcons.night
                }
            })
        }
    })
    return averageDayWeather
}
