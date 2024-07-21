import React, { useState, useEffect } from 'react'
import { fetchWeather } from "../../api/openWeatherMap"

import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CurrentCityForecastDisplay from '../sections/CurrentCityForecastDisplay'
import TodayForecast from '../sections/TodayForecast'
import SevenDaysForecast from '../sections/SevenDaysForecast'
import Spinner from '../components/Spinner'
import { cityOverviewPageStyle as tw } from '../../styles/pages/CityOverviewPage.style'

export default function CityOverviewPage() {

  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(false)

  return (
    <>
        { loading ? <Spinner /> : (
          <>
            <Navbar />
            <div className={`${tw.sectionsWrapper}`}>
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
