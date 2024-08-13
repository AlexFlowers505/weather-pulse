import React from 'react'
import Navbar from '../sections/Navbar.tsx'
import ControlPanel from '../sections/ControlPanel.tsx'
import AreasForecastsList from '../sections/AreasForecastsList.tsx'
import TodayForecast from '../sections/TodayForecast.tsx'
import DiverseForecast from '../sections/DiverseForecast.tsx'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style.tsx'

export default function FavouriteAreasOverviewPage(): React.JSX.Element {
  return (
    <>
        <Navbar />
        <div className={tw.wrapper}>
            <ControlPanel />
            <AreasForecastsList />
            <TodayForecast />
        </div>
        <DiverseForecast />
    </>
  )
}