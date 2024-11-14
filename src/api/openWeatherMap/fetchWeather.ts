import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps, FetchWeatherProps } from "../../types/api/openWeatherMap/FetchWeather.type"
import { getFetchWeatherByCoordsParams } from "./getFetchWeatherByCoordsParams"
import { getFetchWeatherByIdParams } from "./getFetchWeatherByIdParams"

export async function fetchWeather(data: FetchWeatherProps): Promise<any> {
    const { lat, lon, id, isForecast = true } = data as FetchWeatherCoordsBasedProps & FetchWeatherIdBasedProps
    const specUrl = isForecast ? config.specificPaths.weather : config.specificPaths.forecast
    const urlParams = lat && lon ? getFetchWeatherByCoordsParams(lat, lon) : id && getFetchWeatherByIdParams(id)

    const url = `${config.entryURL}${specUrl}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error(`Failed to fetch weather data: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather data')
        }
        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

