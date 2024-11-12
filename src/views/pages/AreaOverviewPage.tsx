import React, { useMemo } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import LocationCurrentWeather from '../sections/LocationCurrentWeather'
import TodayForecast from '../sections/TodayForecast'
import Spinner from '../components/Spinner'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'
import { useParams } from 'react-router-dom'
import FewDaysForecast from '../sections/FewDaysForecast'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'

export type locationWholeDataType = {
  overalls: any,
  weather: any,
} | null

export default function AreaOverviewPage(): React.JSX.Element {
  const { lat_lon } = useParams<{ lat_lon: string }>()
  const coords = useMemo(() => {
    return lat_lon ? lat_lon.split('_') : null
  }, [lat_lon])

  const { loading, locationData } = useFetchExplicitLocationWeather(coords?.[0] as string, coords?.[1] as string)

  if (!lat_lon) throw new Error('Missing required parameter "lat_lon"')

  return (
    <>
      {loading ? <Spinner loading={loading} /> : (
        <>
          <Navbar />
          <div className={`${tw.sectionsWrapper}`}>
            <ControlPanel />
            <LocationCurrentWeather locationData={locationData} />
            <TodayForecast locationData={locationData} />
          </div>
          <FewDaysForecast locationData={locationData} extraStyles={tw.FewDaysForecast} />
        </>
      )}
    </>
  )
}