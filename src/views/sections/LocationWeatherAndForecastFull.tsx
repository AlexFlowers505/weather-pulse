import React from 'react'
import { LocationWeatherAndForecastFullProps as Props } from '../../types/sections/locationWeatherAndForecastFull.type'
import LocationCurrentWeather from './LocationCurrentWeather'
import { locationFavouriteCurrentWeatherStyle as currentWeatherStyle } from '../../styles/sections/LocationFavouriteCurrentWeather.style'
import { LocationWeatherAndForecastFullStyle as tw } from '../../styles/sections/LocationWeatherAndForecastFull.style'
import FewDaysForecast from './FewDaysForecast'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'
import { locationWeatherAndForecastFullConfig as config } from '../../config/sections/LocationWeatherAndForecastFull.config'
import { AppDispatch, RootState } from '../../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFavouriteLocation } from '../../redux/slices/activeFavouriteLocationSlice'

export default function LocationWeatherAndForecastFull(location: Props): React.JSX.Element {
    const isFavourite = useCheckStoreIfFavourite(location.id)    
    const favouriteBtnProps = config.favouriteBtnProps(location, isFavourite, tw.favouriteBtn)

    const dispatch = useDispatch<AppDispatch>()
    const currentFavouriteAreaId = useSelector((state: RootState) => state.activeFavouriteLocation.id)

    const isActive = currentFavouriteAreaId === location.id

    const handleFavouriteLocationClick = () => {
      dispatch(setActiveFavouriteLocation({ id: location.id }))
    }
    
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <FavouriteBtn {...favouriteBtnProps} />
        <div className={`location-weather-and-forecast ${tw.locationWeatherAndForecast} ${isActive && tw.activeFavouriteLocation}`} onClick={() => handleFavouriteLocationClick()}>
          <LocationCurrentWeather {...location} outerStyles={ currentWeatherStyle } hasFavouriteBtn={false} />
          {/* { currentFavouriteAreaId === location.id && <FewDaysForecast locationData={location} />} */}
        </div>
    </div>
  )
}
