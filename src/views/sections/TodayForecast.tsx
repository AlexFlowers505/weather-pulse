import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import { DateFormatter } from '../../utils/getDateTime'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { todayForecastConfig as config } from '../../config/components/todayForecast.config'
import { LocationWeatherData } from '../../types/overalls/locationWeatherData.type'
import { DayHourlyWeather } from '../../types/overalls/dayHourlyWeather'

export default function TodayForecast({locationData}: {locationData: WholeLocationData | null}): React.JSX.Element {
  if (locationData === null) {
    throw new Error('locationData is null')
  } else {

    let DayHourlyWeather: DayHourlyWeather[] = []
    const weatherList = locationData.forecast || []
    weatherList.forEach((hourData: LocationWeatherData, i: number) => {
      if (i <= config.shownHoursQnt) {
        const weatherTime = new DateFormatter(hourData.timestamp).getHoursAndMinutes()
        const weatherTemperature = Math.round(hourData.temperature)
        const weatherIcon = hourData.weatherIcon
        DayHourlyWeather.push({
          timeOrDay: weatherTime,
          temperature: weatherTemperature,
          icon: weatherIcon
        })
      }
    })
    return (
      <ForecastLayout heading={config.heading} layout={config.layout} locationData={DayHourlyWeather} itemsType={config.itemsType}/>
    )
  }
}

