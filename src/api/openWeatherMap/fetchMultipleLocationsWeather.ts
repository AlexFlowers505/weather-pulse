import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { temperatureUnits } from "../../constants/temperatureUnits"
import { fetchWeatherByCoords } from "./fetchWeatherByCoords"

const { celsius } = temperatureUnits
type ForecastData = {
    [key: string]: any
}
export async function fetchMultipleLocationsWeather(locations: MappedSuggestions[], units: string = celsius.name): Promise<(MappedSuggestions & { forecast: ForecastData })[]> {
    try {
        const forecastsArray = await Promise.all(
            locations.map(async location => {
                const forecast = await fetchWeatherByCoords(location.lat, location.lon, units)
                return { ...location, forecast }
            })
        )
        console.log('forecast', forecastsArray)
        return forecastsArray
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}