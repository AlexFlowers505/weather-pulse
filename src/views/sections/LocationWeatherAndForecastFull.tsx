import React, { useEffect, useState } from 'react'
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
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { ExplicitLocationWeather } from '../../types/api/openWeatherMap/ExplicitLocationWeather.type'
import TodayForecast from './TodayForecast'
import { favouritesForecastsLayoutStyle as forecastLayoutStyle } from '../../styles/layouts/FavouritesForecastsLayout.style'

export default function LocationWeatherAndForecastFull(location: Props): React.JSX.Element {
    const isFavourite = useCheckStoreIfFavourite(location.id)    
    const favouriteBtnProps = config.favouriteBtnProps(location, isFavourite, tw.favouriteBtn)

    const units = useSelector((state: RootState) => state.temperatureUnits.__type)
    const activeFavouriteLocation = useSelector((state: RootState) => state.activeFavouriteLocation)
    const { loading, locationData } = useFetchExplicitLocationWeather(activeFavouriteLocation.id, units)
    const [fullweatherAndForecast, setFullWeatherAndForecast] = useState<{locationData: ExplicitLocationWeather | null, loading: boolean}>({locationData: null, loading: false})
  
    useEffect( () => {
      if (Number.isNaN(activeFavouriteLocation.id)) {
        setFullWeatherAndForecast({locationData: null, loading: false})
      } else {
        setFullWeatherAndForecast({locationData: locationData as ExplicitLocationWeather | null, loading: loading})
      }
    }, [activeFavouriteLocation, units, loading])

    const dispatch = useDispatch<AppDispatch>()
    const currentFavouriteAreaId = useSelector((state: RootState) => state.activeFavouriteLocation.id)

    const isActive = currentFavouriteAreaId === location.id

    const handleFavouriteLocationClick = () => {
      dispatch(setActiveFavouriteLocation({ id: location.id }))
    }
    
  return (
    <div className={`wrapper ${tw.wrapper}`}>
      <FavouriteBtn {...favouriteBtnProps} />
      <div className={`current-weather-and-forecast ${tw.locationWeatherAndForecast} ${isActive && tw.locationWeatherAndForecast__active}`} onClick={() => handleFavouriteLocationClick()}>
        <div className={`current-weather ${tw.locationCurrentWeather} ${isActive && tw.locationCurrentWeather__active}`}>
          <LocationCurrentWeather {...location} outerStyles={ currentWeatherStyle } hasFavouriteBtn={false} />
        </div>
          { currentFavouriteAreaId === location.id && 
            <div className={`forecasts-wrapper ${tw.forecastsWrapper}`}>
              <span className={`forecast-separator ${tw.separator}`}></span>
              <TodayForecast locationData={fullweatherAndForecast.locationData} extraStyles={tw.todayForecast} outerStyles={forecastLayoutStyle} />
              <span className={`forecast-separator ${tw.separator} ${tw.separator__fewDaysForecast}`}></span>
              <FewDaysForecast locationData={fullweatherAndForecast.locationData} extraStyles={tw.fewDaysForecast} outerStyles={forecastLayoutStyle} />
            </div>
          }
      </div>
    </div>
  )
}
