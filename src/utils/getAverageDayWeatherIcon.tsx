import { DateFormatter } from "./getDateTime"
import { getDayWeatherIcons } from "./getDayWeatherIcons"
import { getMostAppearedIcon } from "./getMostAppearedIcon"

export const getAverageDayWeatherIcon = (dayWeatherByHours: any[]) => {
    const dayWeatherIcons = getDayWeatherIcons(dayWeatherByHours)
    const mostAppearedIcon = getMostAppearedIcon(dayWeatherIcons)
    const noonHour = '12'

    if (mostAppearedIcon) {
        return mostAppearedIcon
    } else {
        const noonWeather = dayWeatherByHours.find((hour: any) => new DateFormatter(hour.dt).getHours() === noonHour)
        const noonWeatherIcon = noonWeather?.weather[0].icon
        return noonWeatherIcon
    }
}
