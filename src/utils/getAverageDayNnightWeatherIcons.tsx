import { DAY_HOURS, KEY_DAY_HOUR, KEY_NIGHT_HOUR, NIGHT_HOURS } from "../constants/dayNnightHours"
import { KeyDayNnightIcons } from "../types/overalls/keyDayNnightIcons.type"
import { LocationWeatherData } from "../types/overalls/locationWeatherData.type"
import { WeatherIconsByHours } from "../types/utils/weatherIconsByHours.type"
import { DateFormatter } from "./getDateTime"
import { getDayWeatherByHoursIcons } from "./getDayWeatherByHoursIcons"
import { getMostAppearedIcon } from "./getMostAppearedIcon"

export const getAverageDayNnightWeatherIcons = (dayWeatherByHours: LocationWeatherData[]) : KeyDayNnightIcons => {
    const dayNnightsWeatherIcons: WeatherIconsByHours = getDayWeatherByHoursIcons(dayWeatherByHours)

    const mostAppearedDayIcon = getMostAppearedIcon(dayNnightsWeatherIcons.day)
    const mostAppearedNightIcon = getMostAppearedIcon(dayNnightsWeatherIcons.night)

    const keyDayHour = 
        dayWeatherByHours.find((hour: LocationWeatherData) => 
            new DateFormatter(hour.timestamp).getHours() === KEY_DAY_HOUR
        ) ||
        dayWeatherByHours.find((hour: LocationWeatherData) => 
            DAY_HOURS.includes(new DateFormatter(hour.timestamp).getHours())
        )

    const keyNightHour = 
        dayWeatherByHours.find((hour: LocationWeatherData) => 
            new DateFormatter(hour.timestamp).getHours() === KEY_NIGHT_HOUR
        ) || 
        dayWeatherByHours.find((hour: LocationWeatherData) => 
            NIGHT_HOURS.includes(new DateFormatter(hour.timestamp).getHours())
        )

    let keyDayNnightIcons: KeyDayNnightIcons = {
        day: mostAppearedDayIcon || keyDayHour?.weatherIcon || null,
        night: mostAppearedNightIcon || keyNightHour?.weatherIcon || null,
    }
    return keyDayNnightIcons
}