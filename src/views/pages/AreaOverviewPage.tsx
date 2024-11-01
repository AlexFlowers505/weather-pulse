import React, { useEffect, useState, useMemo } from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import CurrentAreaForecastDisplay from '../sections/CurrentAreaForecastDisplay'
import TodayForecast from '../sections/TodayForecast'
import SevenDaysForecast from '../sections/SevenDaysForecast'
import Spinner from '../components/Spinner'
import { areaOverviewPageStyle as tw } from '../../styles/pages/AreaOverviewPage.style'
import { useParams } from 'react-router-dom'
import { fetchLocationByCoords } from '../../api/dadata'
import { fetchLocationForecast } from '../../api/openWeatherMap'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'

export type locationWholeDataType = {
  overalls: any,
  weather: any,
} | null

export default function AreaOverviewPage(): React.JSX.Element {
  const params = useParams<{ lat_lon: string }>()
  const units = useSelector((state: RootState) => state.temperatureUnits.name)
  
  const coords = useMemo(() => {
    return params?.lat_lon ? params.lat_lon.split('_') : null
  }, [params])

  if (coords === null) throw new Error('Missing required parameter "lat_lon" in AreaOverviewPage')

    const [locationData, setLocationData] = useState<locationWholeDataType>({
      overalls: null,
      weather: null,
    })
    const [loading, setLoading] = useState<boolean>(false)
  

  const fetchWeatherData = async () => {
    setLoading(true)
    try {
      const overalls = await fetchLocationByCoords(coords[0], coords[1])
  
      if (overalls && overalls.length > 0) {
        const selectedCoords = {
          lat: overalls[0].lat,
          lon: overalls[0].lon,
        }
        const weather = await fetchLocationForecast(selectedCoords.lat, selectedCoords.lon, units, false)
  
        setLocationData({
          overalls: { ...overalls[0], ...selectedCoords },
          weather,
        })
        console.log('locationdata', locationData)
      }
    } catch (error) {
      console.error('Failed to fetch weather data', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { fetchWeatherData() }, [coords, units])

  return (
    <>
      {loading ? <Spinner loading={loading} /> : (
        <>
          <Navbar />
          <div className={`${tw.sectionsWrapper}`}>
            <ControlPanel />
            <CurrentAreaForecastDisplay locationData={locationData} />
            <TodayForecast locationData={locationData} />
            
          </div>
          <SevenDaysForecast props={[locationData]} />
        </>
      )}
    </>
  )
}