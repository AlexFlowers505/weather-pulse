import { useEffect, useState } from 'react'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { FavouriteLocation } from '../../types/components/favouriteLocation.type'
import { fetchWeather } from '../../api/openWeatherMap/fetchWeather'
import { WeatherResponse } from '../../types/api/openWeatherMap/OpenWeatherMapResponse.type'
import { MappedFavouriteLocation } from '../../types/components/mappedFavouriteLocation.type'
import LocationWeatherAndForecastFull from './LocationWeatherAndForecastFull'

export default function AreasForecastsList(): React.JSX.Element {
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const favouriteLocations = useSelector((state: RootState) => state.favouriteLocations.value)
  const [favouriteLocationsMapped, setFavouriteLocationsMapped] = useState<MappedFavouriteLocation[]>([])

  useEffect(() => {
    const fetchAllFavouriteLocationsForecast = async () => {
      const fetchedLocations = await Promise.all(
        favouriteLocations.map(async (elm: FavouriteLocation) => {
          const fetchedWeather = await fetchWeather({ id: elm.id, isForecast: false, units }) as WeatherResponse
          return {
            id: elm.id,
            isSpecific: elm.isSpecific,
            specificLocation: elm.specificLocation,
            area: elm.area,
            region: elm.region,
            country: elm.country,
            temperature: Math.round(fetchedWeather.main.temp),
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
  }, [favouriteLocations, units])

  return (
    <section className={`container-visuals ${tw.base}`}>
      <div className={`favourites-outer-wrapper ${tw.outerWrapper}`}>
        <div className={`favourites-inner-wrapper ${tw.innerWrapper}`}>
          {favouriteLocationsMapped.length > 0 &&
            favouriteLocationsMapped.map((location: MappedFavouriteLocation, i: number) => {
              return <LocationWeatherAndForecastFull {...location} key={i} />
            })}
        </div>
      </div>
    </section>
  )
}
