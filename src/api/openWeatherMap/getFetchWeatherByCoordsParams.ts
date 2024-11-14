import { useSelector } from "react-redux"
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { RootState } from "../../redux/store/store"


export const getFetchWeatherByCoordsParams = (lat: string, lon: string) => {
    const units = useSelector((state: RootState) => state.temperatureUnits.__type)
    const urlParams = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        units: units.toString(),
        appid: config.apiKey!,
        lang: 'ru',
    })
    return urlParams
}