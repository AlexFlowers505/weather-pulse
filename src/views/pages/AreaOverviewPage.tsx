import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import LocationCurrentWeather from '../sections/LocationCurrentWeather'
import TodayForecast from '../sections/TodayForecast'
import Spinner from '../components/Spinner'
import FewDaysForecast from '../sections/FewDaysForecast'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'
import { useParams, useSearchParams } from 'react-router-dom'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { localStorageKeys } from '../../constants/localStorageItems'
import { fetchLocationInfoByCoords } from '../../api/dadata/fetchLocationInfoByCoords'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { LocationInfo } from '../../types/overalls/locationInfo.type'


export default function AreaOverviewPage(): React.JSX.Element {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get("id"))
  const isSpecificLocation = !!Number(searchParams.get("spec"))
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const storedLocation = useSelector((state: RootState) => state.currentArea)
  const { loading, locationData } = useFetchExplicitLocationWeather(id as number, units)
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null)


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
      if (locationData) {
        try {
          const fetchedData = await fetchLocationInfoByCoords(locationData.lat, locationData.lon)
          const info = {
            area: fetchedData.area,
            region: fetchedData.region,
            country: fetchedData.country,
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
  
  const wholeLocationData: WholeLocationData = { ...locationData, ...locationInfo, isSpecificLocation: isSpecificLocation }
  console.log('my info', wholeLocationData)

  return (
    <>
      <Navbar />
      <div className={`${tw.sectionsWrapper}`}>
        <ControlPanel />
        <LocationCurrentWeather {...wholeLocationData} />
        <TodayForecast {...wholeLocationData} />
      </div>
      <FewDaysForecast {...wholeLocationData} extraStyles={tw.FewDaysForecast} />
    </>
  )
}
