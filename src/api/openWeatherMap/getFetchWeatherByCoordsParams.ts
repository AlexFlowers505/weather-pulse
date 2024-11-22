import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"

export const getFetchWeatherByCoordsParams = (lat: number, lon: number, units: string) => {
    const urlParams = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        units: units.toString(),
        appid: config.apiKey!,
        lang: 'ru',
    })
    return urlParams
}