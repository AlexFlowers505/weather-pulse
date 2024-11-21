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
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { localStorageKeys } from '../../constants/localStorageItems'
import { fetchLocationInfoByCoords } from '../../api/dadata/fetchLocationInfoByCoords'

export type locationWholeDataType = {
  overalls: any,
  weather: any,
} | null

export default function AreaOverviewPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>()
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const idMemo = useMemo(() => id ? id : null, [id])

  let { loading, locationData } = useFetchExplicitLocationWeather(idMemo as string, units)
  let locationInfo = useSelector((state: RootState) => state.currentArea)
  if (isNaN(locationInfo?.id)) {
    locationInfo = localStorage.getItem(localStorageKeys.currentArea)
  } else if (!locationInfo) {
    const partialData = fetchLocationInfoByCoords(locationData.overalls.lat, locationData.overalls.lon)
    locationInfo = {...partialData}
  }
  console.log('locationInfo666', locationInfo)
  
  locationData = {
    ...locationData,
    locationInfo
  }

  if (!id) throw new Error('Missing required parameter "id"')
    console.log('locationData555', locationData)

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