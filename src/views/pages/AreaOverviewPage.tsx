import React, { useEffect, useMemo } from 'react'
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
  // locationData = {
  //   id: idMemo,
  //   forecast: {
  //     ...locationData.list
  //   }
  // }
  console.log('locationData777', locationData)
  let locationInfo
  const StoreLocationInfo = useSelector((state: RootState) => state.currentArea)

  if (StoreLocationInfo && !isNaN(StoreLocationInfo?.id)) {
    locationInfo = StoreLocationInfo
  } else if (localStorage.getItem(localStorageKeys.currentArea)) {
    try {
      locationInfo = JSON.parse(localStorage.getItem(localStorageKeys.currentArea) as string)
    } catch (error) {
      console.error('Error parsing stored location info:', error)
    }
  } else if (locationData && locationData.lat && locationData.lon) {
    try {
      const partialData = fetchLocationInfoByCoords(locationData.lat, locationData.lon)
      locationInfo = {...partialData}
    } catch (error) {
      console.error('Error fetching location info by coords:', error)
    }
  }

  if (!locationData || !locationInfo) {
    throw new Error('Location data or location info is missing')
  }

  locationData = {
    ...locationData,
    locationInfo
  }

  if (!id) throw new Error('Missing required parameter "id"')

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
