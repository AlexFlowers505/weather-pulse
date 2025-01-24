import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import AreasForecastsList from '../sections/AreasForecastsList'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style'
import FewDaysForecast from '../sections/FewDaysForecast'
import { RootState } from '../../redux/store/store'
import { useSelector } from 'react-redux'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { ExplicitLocationWeather } from '../../types/api/openWeatherMap/ExplicitLocationWeather.type'
import { desktopFavouritesForecastItemStyle as dtItemStyle } from '../../styles/layouts/DesktopFavouritesForecastItem.style'
import { favouritesSmFewDaysForecastItemsStyle } from '../../styles/components/FavouritesSmFewDaysForecastItems.style'

export default function FavouriteAreasOverviewPage(): React.JSX.Element {
  const activeFavouriteLocation = useSelector((state: RootState) => state.activeFavouriteLocation)
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const { loading, locationData } = useFetchExplicitLocationWeather(activeFavouriteLocation.id, units)
  const [fullWeatherAndForecast, setFullWeatherAndForecast] = useState<{locationData: ExplicitLocationWeather | null, loading: boolean}>({locationData: null, loading: false})
  const [isAnyLocationActive, setIsAnyLocationActive] = useState(false)

  useEffect( () => {
    if (Number.isNaN(activeFavouriteLocation.id)) {
      setFullWeatherAndForecast({locationData: null, loading: false})
      setIsAnyLocationActive(false)
    } else {
      setFullWeatherAndForecast({locationData: locationData as ExplicitLocationWeather | null, loading: loading})
      setIsAnyLocationActive(true)
    }
  }, [activeFavouriteLocation, units, loading])


  return (
    <>
        <Navbar />
        <div className={`ctrls-n-areas-list-wrapper ${tw.wrapper}`}>
            <ControlPanel isSearchFocusOnLoad={false}/>
            <AreasForecastsList />
        </div>
        <FewDaysForecast locationData={fullWeatherAndForecast.locationData} outerItemStyles={ dtItemStyle } extraItemsStyles={favouritesSmFewDaysForecastItemsStyle} extraStyles={`${tw.fewDaysForecast} ${isAnyLocationActive && tw.fewDaysForecast__active}`} />
    </>
  )
}

