import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import LocationCurrentWeather from '../sections/LocationCurrentWeather'
import TodayForecast from '../sections/TodayForecast'
import Spinner from '../components/Spinner'
import FewDaysForecast from '../sections/FewDaysForecast'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'
import { useParams } from 'react-router-dom'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { localStorageKeys } from '../../constants/localStorageItems'
import { fetchLocationInfoByCoords } from '../../api/dadata/fetchLocationInfoByCoords'

export default function AreaOverviewPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>()
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const storedLocation = useSelector((state: RootState) => state.currentArea)
  const { loading, locationData } = useFetchExplicitLocationWeather(id as string, units)
  const [locationInfo, setLocationInfo] = useState<any>(null)

  useEffect(() => {
    const fetchLocationInfo = async () => {
      // if (storedLocation && !isNaN(storedLocation?.id)) {
      //   setLocationInfo(storedLocation)
      // } else if (localStorage.getItem(localStorageKeys.currentArea)) {
      //   try {
      //     setLocationInfo(JSON.parse(localStorage.getItem(localStorageKeys.currentArea) as string))
      //   } catch (error) {
      //     console.error('Error parsing stored location info:', error)
      //   }
      // } else if (locationData && locationData.lat && locationData.lon) {
      if (locationData && locationData.lat && locationData.lon) {
        try {
          const fetchedData = await fetchLocationInfoByCoords(locationData.lat, locationData.lon)
          const info = {
            area: fetchedData.area,
            region: fetchedData.region,
            country: fetchedData.country,
            lat: locationData.lat,
            lon: locationData.lon,
          }
          setLocationInfo(info)
        } catch (error) {
          console.error('Error fetching location info by coords:', error)
        }
      }
    }

    fetchLocationInfo()
  }, [locationData, storedLocation])

  if (loading || !locationData || !locationInfo) {
    return <Spinner loading={loading} />
  }

  const wholeLocationData = { ...locationData, ...locationInfo }
  console.log('whole1', wholeLocationData)

  return (
    <>
      <Navbar />
      <div className={`${tw.sectionsWrapper}`}>
        <ControlPanel />
        <LocationCurrentWeather locationData={wholeLocationData} />
        <TodayForecast locationData={wholeLocationData} />
      </div>
      <FewDaysForecast locationData={wholeLocationData} extraStyles={tw.FewDaysForecast} />
    </>
  )
}