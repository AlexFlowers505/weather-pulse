import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import AreasForecastsList from '../sections/AreasForecastsList'
import TodayForecast from '../sections/TodayForecast'
import DiverseForecast from '../sections/DiverseForecast'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style'
import { AppDispatch } from '../../redux/store/store'
import { useDispatch } from 'react-redux'
import { setCurrentAreaDataFromStorage } from '../../redux/slices/currentAreaSlice'

export default function FavouriteAreasOverviewPage(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(setCurrentAreaDataFromStorage())
  }, [])
  return (
    <>
        <Navbar />
        <div className={tw.wrapper}>
            <ControlPanel isSearchFocusOnLoad={false}/>
            <AreasForecastsList />
            {/* <TodayForecast locationData={null} /> */}
        </div>
        <DiverseForecast />
    </>
  )
}