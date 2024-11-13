import { useEffect, useState } from "react"
import { fetchLocationByCoords } from "../api/dadata"
import { fetchLocationForecast } from "../api/openWeatherMap/openWeatherMap"
import { locationWholeDataType } from "../views/pages/AreaOverviewPage"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

export const useFetchExplicitLocationWeather = (lat: string, lon: string) => {
  const units = useSelector((state: RootState) => state.temperatureUnits.name)
  const [loading, setLoading] = useState<boolean>(false)
  const [locationData, setLocationData] = useState<locationWholeDataType>({
    overalls: null,
    weather: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const overalls = await fetchLocationByCoords(lat, lon)
        if (overalls && overalls.length > 0) {
          const selectedCoords = {
            lat: overalls[0].lat,
            lon: overalls[0].lon,
          }
          const weather = await fetchLocationForecast(selectedCoords.lat, selectedCoords.lon, units, false)
          setLocationData({
            overalls: { ...overalls[0], ...selectedCoords },
            weather,
          })
        } else {
          console.error('No location data found for the provided coordinates')
          setLocationData({ overalls: null, weather: null })
        }
      } catch (error) {
        console.error('Failed to fetch weather data', error)
        setLocationData({ overalls: null, weather: null })
      } finally {
        setLoading(false)
      }
    }

    if (lat && lon) {
      fetchData()
    } else {
      console.error('Invalid latitude or longitude')
    }
  }, [lat, lon, units])

  return { loading, locationData }
}
