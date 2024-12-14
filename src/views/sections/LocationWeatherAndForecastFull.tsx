import React from 'react'
import { LocationWeatherAndForecastFullProps as Props } from '../../types/sections/locationWeatherAndForecastFull.type'
import LocationCurrentWeather from './LocationCurrentWeather'
import { locationFavouriteCurrentWeatherStyle as currentWeatherStyle } from '../../styles/sections/LocationFavouriteCurrentWeather.style'
import { LocationWeatherAndForecastFullStyle as tw } from '../../styles/sections/LocationWeatherAndForecastFull.style'
import FewDaysForecast from './FewDaysForecast'

export default function LocationWeatherAndForecastFull({...location} : Props): React.JSX.Element {
  return (
    <div className={`${tw.wrapper}`}>
        <LocationCurrentWeather {...location} outerStyles={ currentWeatherStyle } />
        {/* <FewDaysForecast {...location} /> */}
    </div>
  )
}
