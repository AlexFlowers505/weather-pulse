import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"

export const getFetchWeatherByIdParams = (id: string, units: string) => {
    const urlParams = new URLSearchParams({
        id: id,
        appid: config.apiKey!,
        lang: 'ru',
        units: units.toString(),
    })
    return urlParams
}