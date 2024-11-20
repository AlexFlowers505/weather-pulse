import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps, FetchWeatherProps } from "../../types/api/openWeatherMap/FetchWeather.type"
import { OpenWeatherMapResponse } from "../../types/api/openWeatherMap/OpenWeatherMapResponse.type"
import { getFetchWeatherByCoordsParams } from "./getFetchWeatherByCoordsParams"
import { getFetchWeatherByIdParams } from "./getFetchWeatherByIdParams"

export async function fetchWeather(data: FetchWeatherProps): Promise<OpenWeatherMapResponse> {
    const { lat, lon, id, isForecast, units } = data as FetchWeatherCoordsBasedProps & FetchWeatherIdBasedProps
    const specUrl = isForecast ? config.specificPaths.forecast : config.specificPaths.weather
    const urlParams = lat && lon ? getFetchWeatherByCoordsParams(lat, lon, units) : id && getFetchWeatherByIdParams(id, units)

    const url = `${config.entryURL}${specUrl}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error(`Failed to fetch weather data: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather data')
        }
        const responseData: OpenWeatherMapResponse = await response.json()
        return responseData
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

