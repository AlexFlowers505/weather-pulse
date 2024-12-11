import React, { useEffect, useState } from 'react'
import AreaShortForecastItem from '../components/AreaShortForecastItem'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import LocationCurrentWeather from './LocationCurrentWeather'
import { FavouriteLocation } from '../../types/components/favouriteLocation.type'
import { fetchWeather } from '../../api/openWeatherMap/fetchWeather'
import { OpenWeatherMapResponse, WeatherResponse } from '../../types/api/openWeatherMap/OpenWeatherMapResponse.type'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { MappedLocationShortData } from '../../types/api/openWeatherMap/MappedLocationShortData.type'
import { MappedFavouriteLocation } from '../../types/components/mappedFavouriteLocation.type'

export default function AreasForecastsList(): React.JSX.Element {
  const [ favouriteLocations, setFavouriteLocations ] = useState<MappedFavouriteLocation[]>([])
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const storedFavouriteLocations: FavouriteLocation[] | [] = useSelector((state: RootState) => state.favouriteLocations.value)
  
  useEffect(() => {
    storedFavouriteLocations.map(async (elm: FavouriteLocation) => {
      const fetchedWeather = await fetchWeather({ id: elm.id, isForecast: false, units: units }) as WeatherResponse
      const mappedFavouriteLocation: MappedFavouriteLocation = {
        id: elm.id,
        isSpecific: elm.isSpecific,
        specificLocation: elm.specificLocation,
        area: elm.area,
        region: elm.region,
        country: elm.country,
        temperature: fetchedWeather.main.temp,
        weatherIcon: fetchedWeather.weather[0].icon,
        lat: fetchedWeather.coord.lat,
        lon: fetchedWeather.coord.lon
      } 
      setFavouriteLocations([...favouriteLocations, mappedFavouriteLocation])
    })
  }, [])

  return (
    <section className={`container-visuals ${tw.base}`}>
      <div className={`favourites-inner-wrapper ${tw.innerWrapper}`}>
        {favouriteLocations.length > 0 ?
          favouriteLocations.map(location => {
            return <LocationCurrentWeather {...location} />
          })
        : <div></div> }
      </div>
    </section>
  )
}
