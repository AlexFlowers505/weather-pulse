import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import { getAverageDaysWeatherData } from '../../utils/getAverageDaysWeatherData'
import { ForecastByDay, groupForecastByDay } from '../../utils/groupForecastByDay'
import { fewDaysForecastConfig as config } from '../../config/components/fewDaysForecast.config'
import { FewDaysForecastProps } from '../../types/overalls/fewDaysForecast.type'

export default function FewDaysForecast({ extraStyles = '', ...locationData }: FewDaysForecastProps): React.JSX.Element | null {
  if (!locationData) {
    console.error('fewDaysWeather data is missing or empty')
    return null
  }
  const detailedWeatherByDays: ForecastByDay[] | null = groupForecastByDay(locationData.forecast)

  if (!detailedWeatherByDays || detailedWeatherByDays.length === 0) {
    console.error('groupForecastByDay returned empty or invalid data')
    return null
  }

  const averageDaysWeatherData = getAverageDaysWeatherData(detailedWeatherByDays, config.isTodayIncluded, config.daysQnt)
  return (
    <ForecastLayout
      heading={config.heading}
      layout={config.layout}
      locationData={averageDaysWeatherData}
      extraStyles={extraStyles}
      itemsType = {config.forecastItems}
    />
  )
}