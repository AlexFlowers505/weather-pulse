import React, { useState, useEffect } from 'react'
import { fetchWeather } from "../../api/openWeatherMap"

import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CurrentCityForecastDisplay from '../sections/CurrentCityForecastDisplay'
import TodayForecast from '../sections/TodayForecast'
import SevenDaysForecast from '../sections/SevenDaysForecast'
import Spinner from '../components/Spinner'

export default function CityOverviewPage() {

  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(true)

  return (
    <>
        { loading ? <Spinner /> : (
          <>
            <Navbar />
            <div className='flex flex-col justify-between items-start w-full gap-base'>
                <ControlPanel />
                <CurrentCityForecastDisplay />
                <TodayForecast />
            </div>
            <SevenDaysForecast />
          </>
        )}
    </>
  )
}
