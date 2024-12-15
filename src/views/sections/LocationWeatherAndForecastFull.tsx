import React from 'react'
import { LocationWeatherAndForecastFullProps as Props } from '../../types/sections/locationWeatherAndForecastFull.type'
import LocationCurrentWeather from './LocationCurrentWeather'
import { locationFavouriteCurrentWeatherStyle as currentWeatherStyle } from '../../styles/sections/LocationFavouriteCurrentWeather.style'
import { LocationWeatherAndForecastFullStyle as tw } from '../../styles/sections/LocationWeatherAndForecastFull.style'
import FewDaysForecast from './FewDaysForecast'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'
import { locationWeatherAndForecastFullConfig as config } from '../../config/sections/LocationWeatherAndForecastFull.config'

export default function LocationWeatherAndForecastFull(location: Props): React.JSX.Element {
    const isFavourite = useCheckStoreIfFavourite(location.id)    
    const favouriteBtnProps = config.favouriteBtnProps(location, isFavourite, tw.favouriteBtn)
    
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <FavouriteBtn {...favouriteBtnProps} />
        <div className={`location-weather-and-forecast ${tw.locationWeatherAndForecast}`}>
          <LocationCurrentWeather {...location} outerStyles={ currentWeatherStyle } hasFavouriteBtn={false} />
          {/* <FewDaysForecast {...location} /> */}
        </div>
    </div>
  )
}
