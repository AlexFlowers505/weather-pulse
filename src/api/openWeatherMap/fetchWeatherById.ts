import { temperatureUnits } from "../../constants/temperatureUnits"
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { getFetchWeatherByCoordsParams } from "./getFetchWeatherByCoordsParams"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"

const { celsius, fahrenheit } = temperatureUnits
type ForecastData = {
    [key: string]: any
}
export async function fetchWeatherById(id: string, isOnlyTodaysForecast: boolean = true): Promise<ForecastData> {
    const URLspecPathDynamic = isOnlyTodaysForecast ? config.specificPaths.weather: config.specificPaths.forecast

    const urlParams = getFetchWeatherByIdParams(id)

    const url = `${config.entryURL}${URLspecPathDynamic}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error(`Failed to fetch weather data: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather data')
        }
        const data: ForecastData = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}