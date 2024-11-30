import { DAY_HOURS } from "../constants/dayNnightHours"
import { LocationWeatherData } from "../types/overalls/locationWeatherData.type"
import { DayNnightWeatherByHours } from "../types/utils/dayNnightWeatherBHours.type"
import { DateFormatter } from "./getDateTime"

export const getAverageDayNnightTemperature = ( dayWeatherByHour: LocationWeatherData[]): DayNnightWeatherByHours => {
    const dayNnightWeatherByHours: DayNnightWeatherByHours = {
        day: [],
        night: [],
        averageDay: NaN,
        averageNight: NaN,
    }

    dayWeatherByHour.forEach((hour) => {
        const currentHour = new DateFormatter(hour.timestamp).getHours()
        DAY_HOURS.includes(currentHour) ?
            dayNnightWeatherByHours.day.push(hour) :
            dayNnightWeatherByHours.night.push(hour)
    })

    const dayTemperatures = dayNnightWeatherByHours.day.map(({ temperature }) => temperature)
    const nightTemperatures = dayNnightWeatherByHours.night.map(({ temperature }) => temperature)

    dayNnightWeatherByHours.averageDay = Math.round(
        dayTemperatures.reduce((a, b) => a + b, 0) / dayTemperatures.length
    )
    dayNnightWeatherByHours.averageNight = Math.round(
        nightTemperatures.reduce((a, b) => a + b, 0) / nightTemperatures.length
    )
    return dayNnightWeatherByHours
}