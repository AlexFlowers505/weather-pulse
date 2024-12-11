import { useEffect, useState } from 'react'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import LocationCurrentWeather from './LocationCurrentWeather'
import { FavouriteLocation } from '../../types/components/favouriteLocation.type'
import { fetchWeather } from '../../api/openWeatherMap/fetchWeather'
import { WeatherResponse } from '../../types/api/openWeatherMap/OpenWeatherMapResponse.type'
import { MappedFavouriteLocation } from '../../types/components/mappedFavouriteLocation.type'

export default function AreasForecastsList(): React.JSX.Element {
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const favouriteLocations: FavouriteLocation[] | [] = useSelector((state: RootState) => state.favouriteLocations.value)
  const [ favouriteLocationsMapped, setFavouriteLocationsMapped ] = useState<MappedFavouriteLocation[]>([])

  useEffect(() => {
    const fetchAllFavouriteLocationsForecast = async () => {
      const fetchedLocations = await Promise.all(
        favouriteLocations.map(async (elm: FavouriteLocation) => {
          const fetchedWeather = await fetchWeather({ id: elm.id, isForecast: false, units: units }) as WeatherResponse
          return {
            id: elm.id,
            isSpecific: elm.isSpecific,
            specificLocation: elm.specificLocation,
            area: elm.area,
            region: elm.region,
            country: elm.country,
            temperature: fetchedWeather.main.temp,
            weatherIcon: fetchedWeather.weather[0].icon,
            lat: fetchedWeather.coord.lat,
            lon: fetchedWeather.coord.lon,
          }
        })
      )
      setFavouriteLocationsMapped(fetchedLocations)
    }
  
    if (favouriteLocations.length > 0) {
      fetchAllFavouriteLocationsForecast()
    }
  }, [])

  return (
    <section className={`container-visuals ${tw.base}`}>
      <div className={`favourites-inner-wrapper ${tw.innerWrapper}`}>
        {favouriteLocationsMapped.length > 0 ?
          favouriteLocationsMapped.map( (location: MappedFavouriteLocation, i: number) => {
            return <LocationCurrentWeather {...location} key={i} />
          })
        : <div></div> }
      </div>
    </section>
  )
}

