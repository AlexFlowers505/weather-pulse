import React from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CurrentCityForecastDisplay from '../sections/CurrentCityForecastDisplay'
import TodayForecast from '../sections/TodayForecast'
import SevenDaysForecast from '../sections/SevenDaysForecast'

export default function CityOverviewPage() {
  return (
    <>
        <Navbar />
        <div className='flex flex-col justify-between items-start w-full gap-base'>
            <ControlPanel />
            <CurrentCityForecastDisplay />
            <TodayForecast />
        </div>
        <SevenDaysForecast />
    </>
  )
}
