import { locationWeatherData } from "../views/pages/AreaOverviewPage"
import { DateFormatter } from "./getDateTime"
import { getDayWeatherIcons } from "./getDayWeatherIcons"
import { getMostAppearedIcon } from "./getMostAppearedIcon"
import { ForecastByDay } from "./groupForecastByDay"

export const getAverageDayWeatherIcon = (dayWeatherByHours: locationWeatherData[]) => {
    const dayWeatherIcons = getDayWeatherIcons(dayWeatherByHours)
    const mostAppearedIcon = getMostAppearedIcon(dayWeatherIcons)
    const noonHour = '12'

    if (mostAppearedIcon) {
        return mostAppearedIcon
    } else {
        const noonWeather = dayWeatherByHours.find((hour: any) => new DateFormatter(hour.timestamp).getHours() === noonHour)
        console.log('noonWeather', noonWeather)
        const noonWeatherIcon = noonWeather[0].weatherIcon
        return noonWeatherIcon
    }
}
