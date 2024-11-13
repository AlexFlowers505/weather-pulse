import { useEffect, useState } from "react"
import { fetchIcon } from "../api/openWeatherMap/openWeatherMap"

type LocationDataType = {
    overalls: any
    weather: any
}

type UseCurrentWeatherInfoPropsType = {
    locationData: LocationDataType,
}

export function useCurrentWeatherInfo({ locationData }: UseCurrentWeatherInfoPropsType) {
    const [name, setName] = useState('')
    const [temp, setTemp] = useState(0)
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        setName(locationData.overalls?.area || '')
        setTemp(locationData.weather?.list[0].main.temp ? Math.round(locationData.weather?.list[0].main.temp) : 0)

        const loadIcon = async () => {
          try {
            const url = await fetchIcon(locationData.weather?.list[0].weather[0].icon)
            setIconUrl(url)
          } catch (error) {
            console.error('Error fetching icon:', error)
          }
        }
    
        loadIcon()
      }, [locationData])

    return { name, temp, iconUrl }
}

