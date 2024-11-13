import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { UnitsType } from "../../constants/temperatureUnits"


export const getFetchWeatherByCoordsParams = (lat: string, lon: string, urlUnits: UnitsType) => {
    const urlParams = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        units: urlUnits.toString(),
        appid: config.apiKey!,
        lang: 'ru',
    })
    return urlParams
}