import { fetchWeather } from "./fetchWeather"
import { MultipleLocationsWeatherRequestsProps } from "../../types/api/openWeatherMap/MultipleLocationsWeatherRequestsProps.type"
import { OpenWeatherMapResponse } from "../../types/api/openWeatherMap/OpenWeatherMapResponse.type"
import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"

// TODO: 
// switch if else statements and promise all call

export async function handleMultipleLocationsWeatherRequests({ data, isForecast, units, isSuggestionsFetch = false }: MultipleLocationsWeatherRequestsProps): Promise<(OpenWeatherMapResponse | (OpenWeatherMapResponse & MappedSuggestions))[]> {
    try {
        let multipleWeatherData: any[] = []
        
        await Promise.all(
            data.map(async location => {
                if (isSuggestionsFetch && 'area' in location) {
                    let weatherData = await fetchWeather({  
                        lat: location.lat,
                        lon: location.lon,
                        isForecast: isForecast,
                        units: units,
                    })
                    let locationFullData = {
                    ...weatherData,
                    area: location.area,
                    region: location.region,
                    country: location.country,
                }
                if ('main' in locationFullData) {
                    locationFullData.main.temp = Math.round(locationFullData.main.temp)
                }
                multipleWeatherData.push(locationFullData)
                    
                } else if ('id' in location) {
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