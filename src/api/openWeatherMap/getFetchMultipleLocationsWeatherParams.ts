import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"


export const getFetchMultipleLocationsWeatherParams = (ids: string[]) => {
    const units = useSelector((state: RootState) => state.temperatureUnits.__type)
    const params = new URLSearchParams({
        id: ids.join(','),
        units: units.toString(),
        lang: 'ru',
        appid: config.apiKey!,
    })
    return params
} 
