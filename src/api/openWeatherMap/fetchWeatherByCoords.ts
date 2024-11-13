import { temperatureUnits } from "../../constants/temperatureUnits"
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { getFetchWeatherByCoordsParams } from "./getFetchWeatherByCoordsParams"

const { celsius, fahrenheit } = temperatureUnits
type ForecastData = {
    [key: string]: any
}
export async function fetchWeatherByCoords(lat: string, lon: string, units: string = celsius.name, isOnlyTodaysForecast: boolean = true): Promise<ForecastData> {
    const urlUnits = units === celsius.name ? celsius.__type : fahrenheit.__type
    const URLspecPathDynamic = isOnlyTodaysForecast ? config.specificPaths.weather: config.specificPaths.forecast

    const urlParams = getFetchWeatherByCoordsParams(lat, lon, urlUnits)

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