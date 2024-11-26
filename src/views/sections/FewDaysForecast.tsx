import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { getAverageDaysWeatherData } from '../../utils/getAverageDaysWeatherData'
import { groupForecastByDay } from '../../utils/groupForecastByDay'
import { WholeLocationData } from '../pages/AreaOverviewPage'

const localProps = {
    heading: 'Прогноз на 5 дней',
    layout: forecastLayoutTypes.lgVertical,
}

export interface fewDaysForecastProps {
  locationData: WholeLocationData | null
  extraStyles?: string
}

export default function FewDaysForecast({ locationData, extraStyles = '' }: fewDaysForecastProps): React.JSX.Element | null {
  if (!locationData) {
    console.error('fewDaysWeather data is missing or empty')
    return null
  }
  const detailedWeatherByDays = groupForecastByDay(locationData.forecast) as any[]
  if (!detailedWeatherByDays || detailedWeatherByDays.length === 0) {
    console.error('groupForecastByDay returned empty or invalid data')
    return null
  }

  const averageDaysWeatherData = getAverageDaysWeatherData(detailedWeatherByDays, false)
  console.log('averageDaysWeatherData', averageDaysWeatherData)

  return (
    <ForecastLayout
      heading={localProps.heading}
      layout={localProps.layout}
      locationData={averageDaysWeatherData}
      extraStyles={extraStyles}
    />
  )
}