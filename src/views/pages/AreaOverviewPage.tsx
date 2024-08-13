import React, { useState } from 'react'
import { fetchWeather } from "../../api/openWeatherMap.ts"

import Navbar from '../sections/Navbar.tsx'
import ControlPanel from '../sections/ControlPanel.tsx'
import CurrentAreaForecastDisplay from '../sections/CurrentAreaForecastDisplay.tsx'
import TodayForecast from '../sections/TodayForecast.tsx'
import SevenDaysForecast from '../sections/SevenDaysForecast.tsx'
import Spinner from '../components/Spinner.tsx'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style.tsx'

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
