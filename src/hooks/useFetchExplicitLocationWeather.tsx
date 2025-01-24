import { useEffect, useState } from "react"
import { fetchWeather } from "../api/openWeatherMap/fetchWeather"
import { OpenWeatherMapResponse } from "../types/api/openWeatherMap/OpenWeatherMapResponse.type"
import { ExplicitLocationWeather } from "../types/api/openWeatherMap/ExplicitLocationWeather.type"

export const useFetchExplicitLocationWeather = (id: number, units: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [locationData, setLocationData] = useState<ExplicitLocationWeather | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (Number.isNaN(id)) {
          setLocationData(null)
        } else if (id) {
          const weather: OpenWeatherMapResponse = await fetchWeather({ id: id, isForecast: false, units: units})
          const forecast: OpenWeatherMapResponse = await fetchWeather({ id: id, isForecast: true, units: units})
          console.log('Weather data:', weather)
          if ('list' in forecast && 'main' in weather) {
            let mappedForecast = forecast.list.map( elm => ({
                timestamp: elm.dt,
                temperature: elm.main.temp,
                weatherIcon: elm.weather[0].icon
            }))
            setLocationData({
              temperature: Math.round(weather.main.temp),
              weatherIcon: weather.weather[0].icon,
              forecast: mappedForecast,
              id: id,
              lat: weather.coord.lat,
              lon: weather.coord.lon,
              specificLocation: weather.name
            })
          }
        } else {
          console.error('No location data found for the provided coordinates')
          setLocationData(null)
        }
      } catch (error) {
        console.error('Failed to fetch weather data', error)
        setLocationData(null)
      } finally {
        setLoading(false)
      }
    }
    if (!id || Number.isNaN(id)) {
      console.error('Invalid location id:', id);
      setLocationData(null);
      setLoading(false);
      return;
    }
    if (id) fetchData()
    else console.error('Invalid latitude or longitude')
  }, [id, units])

  return { loading, locationData }
}

