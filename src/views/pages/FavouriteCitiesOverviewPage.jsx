import React from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CitiesForecastsList from '../sections/CitiesForecastsList'
import TodayForecast from '../sections/TodayForecast'
import DiverseForecast from '../sections/DiverseForecast'

export default function FavouriteCitiesOverviewPage() {
    const twStyles = {
        wrapper: `
            flex
            flex-col
            justify-between
            items-start
            w-full
            gap-base
        `,
    }
  return (
    <>
        <Navbar />
        <div className={twStyles.wrapper}>
            <ControlPanel />
            <CitiesForecastsList />
            <TodayForecast />
        </div>
        <DiverseForecast />
    </>
  )
}
