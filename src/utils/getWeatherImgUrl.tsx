import { weatherIllustrationsConfig as config } from "../config/img/weatherImg.config"
import { URL_PATHS } from "../constants/paths"

export const getWeatherImgUrl = (icon: string | null): string => {
    if (!icon) return ''
    return `${URL_PATHS.WEATHER_IMG}${icon}.${config.ext}`
}