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
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { localStorageKeys } from '../../constants/localStorageItems'
import { fetchLocationInfoByCoords } from '../../api/dadata/fetchLocationInfoByCoords'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { setCurrentAreaData } from '../../redux/slices/currentAreaSlice'
import { LocationInfo } from '../../types/overalls/locationInfo.type'




export default function AreaOverviewPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>()
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const idMemo = useMemo(() => id ? id : null, [id])
  const dispatch = useDispatch<AppDispatch>()

  let wholeLocationData: WholeLocationData | null = null

  useEffect(() => {
    if (wholeLocationData &&
        'lat' in wholeLocationData && 
        'lon' in wholeLocationData && 
        'area' in wholeLocationData && 
        'region' in wholeLocationData && 
        'country' in wholeLocationData
      ) {
      dispatch(setCurrentAreaData({lat: wholeLocationData.lat, lon: wholeLocationData.lon, area: wholeLocationData.area, region: wholeLocationData.region, country: wholeLocationData.country}))
    }
  }, [wholeLocationData])
  

  let { loading, locationData } = useFetchExplicitLocationWeather(idMemo as string, units)
  // let locationInfo: LocationInfo
  let locationInfo: any
  const StoreLocationInfo = useSelector((state: RootState) => state.currentArea)

  // define location info
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
  wholeLocationData = { ...locationData, ...locationInfo }

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

