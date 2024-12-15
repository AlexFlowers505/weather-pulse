import React from 'react'
import { LocationWeatherAndForecastFullProps as Props } from '../../types/sections/locationWeatherAndForecastFull.type'
import LocationCurrentWeather from './LocationCurrentWeather'
import { locationFavouriteCurrentWeatherStyle as currentWeatherStyle } from '../../styles/sections/LocationFavouriteCurrentWeather.style'
import { LocationWeatherAndForecastFullStyle as tw } from '../../styles/sections/LocationWeatherAndForecastFull.style'
import FewDaysForecast from './FewDaysForecast'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import { btnStyles } from '../../styles/components/btn.style'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'

export default function LocationWeatherAndForecastFull({...location} : Props): React.JSX.Element {
    const isFavourite = useCheckStoreIfFavourite(location.id)    
  
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <FavouriteBtn
          btnSize={btnStyles.size.lg} 
          btnStyle={btnStyles.style.contentOnly}
          isFavourite={isFavourite}
          id={location.id}
          lat={location.lat}
          lon={location.lon}
          isSpecific={location.isSpecific}
          specificLocation={location.specificLocation}
          area={location.area}
          region={location.region}
          country={location.country}
          extraBtnClass={tw.favouriteBtn}
        />
      <div className={`location-weather-and-forecast ${tw.locationWeatherAndForecast}`}>
        <LocationCurrentWeather {...location} outerStyles={ currentWeatherStyle } hasFavouriteBtn={false} />
        {/* <FewDaysForecast {...location} /> */}
      </div>
    </div>
  )
}
