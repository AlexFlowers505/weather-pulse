import { fetchWeather } from "./fetchWeather"
import { MultipleLocationsWeatherRequestsProps } from "../../types/api/openWeatherMap/MultipleLocationsWeatherRequestsProps.type"

export async function handleMultipleLocationsWeatherRequests({ data, isForecast, units }: MultipleLocationsWeatherRequestsProps): Promise<any> {
    try {
        let multipleWeatherData: any[] = []
        
        await Promise.all(
            data.map(async location => {
                if ('id' in location) {
                    const weatherData = await fetchWeather({  id: location.id,  isForecast: isForecast, units: units })
                    multipleWeatherData.push(weatherData)
                } else {
                    const weatherData = await fetchWeather({ lat: location.lat, lon: location.lon, isForecast: isForecast, units: units })
                    multipleWeatherData.push(weatherData)
                }
            })
        )
        return multipleWeatherData
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}