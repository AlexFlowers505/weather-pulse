import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { locationWholeDataType } from '../pages/AreaOverviewPage'
import { DateFormatter } from '../../utils/getDateTime'


const localProps = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal,
  extraStyles: '',
  shownHoursQnt: 6
}

export interface TodayForecastProps {
  locationData: locationWholeDataType | null
}

export default function TodayForecast({locationData}: TodayForecastProps): React.JSX.Element {
  if (locationData === null) {
    throw new Error('locationData is null')
  } else {
    console.log('locationDataTODAY', locationData)
    let dayWeather: any[] = []
    const weatherList = locationData.weather?.list || []
    weatherList.forEach((hourData: any, i: number) => {
      if (i <= localProps.shownHoursQnt) {
        const weatherTime = new DateFormatter(hourData.dt).getHoursAndMinutes()
        const weatherTemperature = Math.round(hourData.main.temp)
        const weatherIcon = hourData.weather[0].icon
        dayWeather.push({
          timeOrDay: weatherTime,
          temperature: weatherTemperature,
          icon: weatherIcon
        })
      }
    })
    return (
      <ForecastLayout heading={localProps.heading} layout={localProps.layout} locationData={dayWeather}/>
    )
  }
}

