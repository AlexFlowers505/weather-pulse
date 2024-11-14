import { fetchWeather } from "./fetchWeather"
import { MultipleLocationsWeatherRequestsProps } from "../../types/api/openWeatherMap/MultipleLocationsWeatherRequestsProps.type"
import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps } from "../../types/api/openWeatherMap/FetchWeather.type"

export async function handleMultipleLocationsWeatherRequests({ data, isForecast, units }: MultipleLocationsWeatherRequestsProps): Promise<any> {
    try {
        let multipleWeatherData: any[] = []
        
        await Promise.all(
            data.map(async location => {
                if ((location as FetchWeatherIdBasedProps).id) {
                    const weatherData = await fetchWeather({  id: (location as FetchWeatherIdBasedProps).id,  isForecast: isForecast, units: units })
                    multipleWeatherData.push(weatherData)
                } else {
                    const weatherData = await fetchWeather({ lat: (location as FetchWeatherCoordsBasedProps).lat, lon: (location as FetchWeatherCoordsBasedProps).lon, isForecast: isForecast, units: units })
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

