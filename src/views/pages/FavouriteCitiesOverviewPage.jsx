import React from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CitiesForecastsList from '../sections/CitiesForecastsList'
import TodayForecast from '../sections/TodayForecast'
import DiverseForecast from '../sections/DiverseForecast'
import { favouriteCitiesOverviewPageStyle as tw } from '../../styles/pages/FavouriteCitiesOverviewPage.style'

export default function FavouriteCitiesOverviewPage() {
  return (
    <>
        <Navbar />
        <div className={tw.wrapper}>
            <ControlPanel />
            <CitiesForecastsList />
            <TodayForecast />
        </div>
        <DiverseForecast />
    </>
  )
}