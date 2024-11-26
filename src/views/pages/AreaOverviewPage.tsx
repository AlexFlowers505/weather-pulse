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

export type locationWholeDataType = { [key: string]: any } | null
export type locationWeatherData = {
  temperature: number
  weatherIcon: string
  timestamp: number
}
export type WholeLocationData = locationWeatherData & { forecast: locationWeatherData[] }   

export default function AreaOverviewPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>()
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const idMemo = useMemo(() => id ? id : null, [id])

  let { loading, locationData } = useFetchExplicitLocationWeather(idMemo as string, units)
  
  let locationInfo
  const StoreLocationInfo = useSelector((state: RootState) => state.currentArea)

  if (StoreLocationInfo && !isNaN(StoreLocationInfo?.id)) {
    locationInfo = StoreLocationInfo
  } else if (localStorage.getItem(localStorageKeys.currentArea)) {
    try {
      locationInfo = JSON.parse(localStorage.getItem(localStorageKeys.currentArea) as string)
    } catch (error) {
      console.error('Error parsing stored location info:', error)
      locationInfo = null
    }
  } else if (locationData && locationData.lat && locationData.lon) {
    try {
      const data = fetchLocationInfoByCoords(locationData.lat, locationData.lon)
      locationInfo = {...data}
    } catch (error) {
      console.error('Error fetching location info by coords:', error)
      locationInfo = null
    }
  }
  if (loading || !locationData || !locationInfo) {
    return <Spinner loading={loading} />
  }

  const wholeLocationData: WholeLocationData = { ...locationData, ...locationInfo }
  console.log('locationData999', locationData)

  if (!id) throw new Error('Missing required parameter "id"')

  return (
    <>
      {loading ? <Spinner loading={loading} /> : (
        <>
          <Navbar />
          <div className={`${tw.sectionsWrapper}`}>
            <ControlPanel />
            <LocationCurrentWeather locationData={wholeLocationData} />
            <TodayForecast locationData={wholeLocationData} />
          </div>
          <FewDaysForecast locationData={wholeLocationData} extraStyles={tw.FewDaysForecast} />
        </>
      )}
    </>
  )
}

