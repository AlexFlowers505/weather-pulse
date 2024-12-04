import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"

export const getFetchWeatherByIdParams = (id: number, units: string) => {
    const urlParams = new URLSearchParams({
        id: id.toString(),
        appid: config.apiKey!,
        lang: 'ru',
        units: units,
    })
    return urlParams
}