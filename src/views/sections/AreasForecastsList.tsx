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

export default function AreasForecastsList(): React.JSX.Element {
  const [ favouriteLocations, setFavouriteLocations ] = useState<WholeLocationData[]>([])
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const storedFavouriteLocations: FavouriteLocation[] | [] = useSelector((state: RootState) => state.favouriteLocations.value)
  
  useEffect(() => {
    storedFavouriteLocations.map((elm: FavouriteLocation) => {
      fetchWeather({ id: elm.id, isForecast: false, units: units })
        .then( (response: any ) => {
            return { 
              area: elm.area, 
              temperature: response.main.temp,
              weatherIcon: response.weather[0].icon,
              id: elm.id,
            } 
        }).then((response: any) => {
          setFavouriteLocations([...favouriteLocations, response])
          console.log('favouriteLocations', favouriteLocations)
      })
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
