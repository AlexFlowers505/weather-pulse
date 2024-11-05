import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { getAverageDaysWeatherData } from '../../utils/getAverageDaysWeatherData'
import { groupForecastByDay } from '../../utils/groupForecastByDay'
import { locationWholeDataType } from '../pages/AreaOverviewPage'

const localProps = {
    heading: 'Прогноз на 5 дней',
    layout: forecastLayoutTypes.vertical,
}

export interface fewDaysForecastProps {
  locationData: locationWholeDataType | null
  extraStyles?: string
}

export default function FewDaysForecast({ locationData, extraStyles = '' }: fewDaysForecastProps): React.JSX.Element | null {
  if (!locationData?.weather || locationData.weather.length === 0) {
    console.error('fewDaysWeather data is missing or empty')
    return null
  }

  const detailedWeatherByDays = groupForecastByDay(locationData.weather) as any[]
  if (!detailedWeatherByDays || detailedWeatherByDays.length === 0) {
    console.error('groupForecastByDay returned empty or invalid data')
    return null
  }

  const averageDaysWeatherData = getAverageDaysWeatherData(detailedWeatherByDays, false)

  return (
    <ForecastLayout
      heading={localProps.heading}
      layout={localProps.layout}
      locationData={averageDaysWeatherData}
      extraStyles={extraStyles}
    />
  )
}