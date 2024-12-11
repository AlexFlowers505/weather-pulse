import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import LocationCurrentWeather from '../sections/LocationCurrentWeather'
import TodayForecast from '../sections/TodayForecast'
import Spinner from '../components/Spinner'
import FewDaysForecast from '../sections/FewDaysForecast'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'
import { useSearchParams } from 'react-router-dom'
import { useFetchExplicitLocationWeather } from '../../hooks/useFetchExplicitLocationWeather'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { fetchLocationInfoByCoords } from '../../api/dadata/fetchLocationInfoByCoords'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { LocationInfo } from '../../types/overalls/locationInfo.type'
import { explicitForecastConfig as config } from '../../config/pages/ExplicitForecast.config'
import { setCurrentAreaData } from '../../redux/slices/currentAreaSlice'


export default function AreaOverviewPage(): React.JSX.Element {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get("id"))
  const isSpecific = !!Number(searchParams.get("spec"))
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const storedLocation = useSelector((state: RootState) => state.currentArea)
  const { loading, locationData } = useFetchExplicitLocationWeather(id as number, units)
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchLocationInfo = async () => {
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

  useEffect(() => {
    dispatch(setCurrentAreaData({ id: id, isSpecific: isSpecific }))
  }, [])
  
  if (loading || !locationData || !locationInfo) {
    return <Spinner loading={loading} />
  }
  
  const wholeLocationData: WholeLocationData = { ...locationData, ...locationInfo, isSpecific }
  console.log('my info', wholeLocationData)

  return (
    <>
      <Navbar />
      <div className={`sections-wrapper ${tw.sectionsWrapper}`}>
        <ControlPanel isSearchFocusOnLoad={config.isSearchFocusOnLoad} />
        <LocationCurrentWeather {...wholeLocationData} />
        <TodayForecast {...wholeLocationData} />
      </div>
      <FewDaysForecast {...wholeLocationData} extraStyles={`few-days-forecast ${tw.FewDaysForecast}`} />
    </>
  )
}
