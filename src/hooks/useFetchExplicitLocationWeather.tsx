import { useEffect, useState } from "react"
import { fetchWeather } from "../api/openWeatherMap/fetchWeather"
import { OpenWeatherMapResponse } from "../types/api/openWeatherMap/OpenWeatherMapResponse.type"
import { ExplicitLocationWeather } from "../types/api/openWeatherMap/ExplicitLocationWeather.type"

export const useFetchExplicitLocationWeather = (id: number, units: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [locationData, setLocationData] = useState<ExplicitLocationWeather | null>(null)

  useEffect(() => {
    // Если id некорректен, сбрасываем данные и не делаем запрос
    if (!id || Number.isNaN(id)) {
      setLocationData(null)
      setLoading(false)
      return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const weather = await fetchWeather({ id, isForecast: false, units })
        const forecast = await fetchWeather({ id, isForecast: true, units })

        if (!weather || !forecast || !('list' in forecast) || !('main' in weather)) {
          console.error('Недостаточно данных о погоде:', { weather, forecast })
          setLocationData(null)
          return
        }

        setLocationData({
          temperature: Math.round(weather.main.temp),
          weatherIcon: weather.weather[0].icon,
          forecast: forecast.list.map(elm => ({
            timestamp: elm.dt,
            temperature: elm.main.temp,
            weatherIcon: elm.weather[0].icon
          })),
          id,
          lat: weather.coord.lat,
          lon: weather.coord.lon,
          specificLocation: weather.name
        })
      } catch (error) {
        console.error('Ошибка загрузки данных о погоде:', error)
        setLocationData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id, units])

  return { loading, locationData }
}
