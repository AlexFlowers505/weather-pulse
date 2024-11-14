import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"

export const getFetchWeatherByCoordsParams = (lat: string, lon: string, units: string) => {
    const urlParams = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        units: units.toString(),
        appid: config.apiKey!,
        lang: 'ru',
    })
    return urlParams
}