import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import AreasForecastsList from '../sections/AreasForecastsList'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style'
import FewDaysForecast from '../sections/FewDaysForecast'
import { RootState } from '../../redux/store/store'
import { useSelector } from 'react-redux'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { desktopFavouritesForecastItemStyle as dtItemStyle } from '../../styles/layouts/DesktopFavouritesForecastItem.style'
import { favouritesSmFewDaysForecastItemsStyle } from '../../styles/components/FavouritesSmFewDaysForecastItems.style'

export default function FavouriteAreasOverviewPage(): React.JSX.Element {
  const activeFavouriteLocation = useSelector((state: RootState) => state.activeFavouriteLocation)
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)

  const isAnyLocationActive = activeFavouriteLocation && !Number.isNaN(activeFavouriteLocation.id)

  const { loading, locationData } = useFetchExplicitLocationWeather(
    isAnyLocationActive ? activeFavouriteLocation.id : 0, 
    units
  )

  return (
    <>
        <Navbar />
        <div className={`ctrls-n-areas-list-wrapper ${tw.wrapper}`}>
            <ControlPanel isSearchFocusOnLoad={false}/>
            <AreasForecastsList />
        </div>

          <FewDaysForecast 
            locationData={locationData} 
            outerItemStyles={dtItemStyle} 
            extraItemsStyles={favouritesSmFewDaysForecastItemsStyle} 
            extraStyles={`${tw.fewDaysForecast} ${tw.fewDaysForecast__active}`} 
          />
    </>
  )
}


