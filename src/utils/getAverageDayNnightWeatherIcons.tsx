import { DAY_HOURS, KEY_DAY_HOUR, KEY_NIGHT_HOUR, NIGHT_HOURS } from "../constants/dayNnightHours"
import { WeatherIconsByHours } from "../types/utils/weatherIconsByHours.type"
import { locationWeatherData } from "../views/pages/AreaOverviewPage"
import { DateFormatter } from "./getDateTime"
import { getDayWeatherByHoursIcons } from "./getDayWeatherByHoursIcons"
import { getMostAppearedIcon } from "./getMostAppearedIcon"

export const getAverageDayNnightWeatherIcons = (dayWeatherByHours: locationWeatherData[]) => {
    const dayNnightsWeatherIcons: WeatherIconsByHours = getDayWeatherByHoursIcons(dayWeatherByHours)
    console.log('day weather hours', dayWeatherByHours)
    console.log('day icons', dayNnightsWeatherIcons)

    type KeyDayNnightIcons = {
        day: string | null
        night: string | null
    };

    const mostAppearedDayIcon = getMostAppearedIcon(dayNnightsWeatherIcons.day)
    const mostAppearedNightIcon = getMostAppearedIcon(dayNnightsWeatherIcons.night)

    const keyDayHour = 
        dayWeatherByHours.find((hour: locationWeatherData) => 
            new DateFormatter(hour.timestamp).getHours() === KEY_DAY_HOUR
        ) || 
        dayWeatherByHours.find((hour: locationWeatherData) => 
            DAY_HOURS.includes(new DateFormatter(hour.timestamp).getHours())
        )

    const keyNightHour = 
        dayWeatherByHours.find((hour: locationWeatherData) => 
            new DateFormatter(hour.timestamp).getHours() === KEY_NIGHT_HOUR
        ) || 
        dayWeatherByHours.find((hour: locationWeatherData) => 
            NIGHT_HOURS.includes(new DateFormatter(hour.timestamp).getHours())
        )

    let keyDayNnightIcons: KeyDayNnightIcons = {
        day: mostAppearedDayIcon || keyDayHour?.weatherIcon || null,
        night: mostAppearedNightIcon || keyNightHour?.weatherIcon || null,
    }
    return keyDayNnightIcons
}