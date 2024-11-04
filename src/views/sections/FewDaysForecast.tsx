import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { getAverageDaysWeatherData } from '../../utils/getAverageDaysWeatherData'
import { groupForecastByDay } from '../../utils/groupForecastByDay'
import { locationWholeDataType } from '../pages/AreaOverviewPage'

const localProps = {
    heading: 'Прогноз на 7 дней',
    layout: forecastLayoutTypes.vertical,
}
export interface fewDaysForecastProps {
  locationData: locationWholeDataType | null
  extraStyles?: String
}

export default function FewDaysForecast({locationData, extraStyles=''}: fewDaysForecastProps): React.JSX.Element {
  console.log('datata', locationData)
  const detailedWeatherByDays = groupForecastByDay(locationData?.weather) as any[]
  const averageDaysWeatherData = getAverageDaysWeatherData(detailedWeatherByDays)
  return (
    // <ForecastLayout heading={localProps.heading} layout={localProps.layout} locationData={averageDaysWeatherData}/>
    <div></div>
  )
}