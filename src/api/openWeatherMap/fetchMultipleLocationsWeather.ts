
import { overallsConfig as config } from "../../config/api/openWeatherMap/overalls.config"
import { FetchMultipleLocationsWeatherProps } from "../../types/api/openWeatherMap/FetchMultipleLocationsWeather.type"
import { getFetchMultipleLocationsWeatherParams } from "./getFetchMultipleLocationsWeatherParams"

export async function fetchMultipleLocaitonsWeather(data: FetchMultipleLocationsWeatherProps): Promise<any>{

    const ids: string[] = data.map( elm => elm.id)
    const params = getFetchMultipleLocationsWeatherParams(ids)
    const url = `${config.entryURL}${config.specificPaths.multipleLocations}?${params.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log('Weather data for group of cities:', data)
        return data
    } catch (error) {
        console.error('Error fetching group weather data:', error)
        throw error
    }
}
