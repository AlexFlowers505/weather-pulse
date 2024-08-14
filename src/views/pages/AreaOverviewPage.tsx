import React, { useState } from 'react'
// import { fetchWeather } from "../../api/openWeatherMap"

import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CurrentAreaForecastDisplay from '../sections/CurrentAreaForecastDisplay'
import TodayForecast from '../sections/TodayForecast'
import SevenDaysForecast from '../sections/SevenDaysForecast'
import Spinner from '../components/Spinner'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'

export default function AreaOverviewPage(): React.JSX.Element {

  const [forecast, setForecast] = useState<{}>({})
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
        { loading ? <Spinner loading={loading} /> : (
          <>
            <Navbar />
            <div className={`${tw.sectionsWrapper}`}>
                <ControlPanel />
                <CurrentAreaForecastDisplay />
                <TodayForecast />
            </div>
            <SevenDaysForecast />
          </>
        )}
    </>
  )
}
