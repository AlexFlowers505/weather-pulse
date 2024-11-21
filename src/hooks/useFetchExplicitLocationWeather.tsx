import { useEffect, useState } from "react"
import { fetchWeather } from "../api/openWeatherMap/fetchWeather"

export const useFetchExplicitLocationWeather = (id: string, units: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [locationData, setLocationData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (id) {
          const weather = await fetchWeather({ id: id, isForecast: false, units: units})
          const forecast = await fetchWeather({ id: id, isForecast: true, units: units})
          setLocationData({weather, forecast})
          console.log('locationData888', locationData)
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
    if (id) fetchData()
    else console.error('Invalid latitude or longitude')
  }, [id, units])

  return { loading, locationData }
}
