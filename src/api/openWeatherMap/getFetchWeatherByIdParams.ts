import { useSelector } from "react-redux"
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { RootState } from "../../redux/store/store"

export const getFetchWeatherByIdParams = (id: string) => {
    const units = useSelector((state: RootState) => state.temperatureUnits.__type)
    const urlParams = new URLSearchParams({
        id: id,
        appid: config.apiKey!,
        lang: 'ru',
        units: units.toString(),
    })
    return urlParams
}