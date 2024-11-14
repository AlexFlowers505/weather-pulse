import { fetchWeather } from "./fetchWeather"
import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps } from "../../types/api/openWeatherMap/FetchWeather.type"

type handleMultipleLocationsWeatherRequestsProps = {
    data: (FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps)[],
    isForecast: boolean
}

export async function handleMultipleLocationsWeatherRequests({ data, isForecast }: handleMultipleLocationsWeatherRequestsProps): Promise<any> {
    try {
        let multipleWeatherData: any[] = []
        
        await Promise.all(
            data.map(async location => {
                if ('lat' in location) {
                    const weatherData = await fetchWeather({ lat: location.lat, lon: location.lon, isForecast: isForecast })
                    multipleWeatherData.push(weatherData)
                } else {
                    const weatherData = await fetchWeather({ id: location.id, isForecast: isForecast })
                    multipleWeatherData.push(weatherData)
                }
            })
        )
        console.log('multipleWeatherData', multipleWeatherData)
        return multipleWeatherData
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

