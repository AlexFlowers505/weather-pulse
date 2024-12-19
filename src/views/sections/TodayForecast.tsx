import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import { DateFormatter } from '../../utils/getDateTime'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'
import { todayForecastConfig as config } from '../../config/components/todayForecast.config'
import { LocationWeatherData } from '../../types/overalls/locationWeatherData.type'
import { DayHourlyWeather } from '../../types/overalls/dayHourlyWeather'
import { ExplicitLocationWeather } from '../../types/api/openWeatherMap/ExplicitLocationWeather.type'
import { TodayForecastProps } from '../../types/sections/todayForecast.type'

export default function TodayForecast({ 
  extraStyles = '', 
  locationData = null, 
  outerStyles = {}, 
  outerItemStyles = {},
  extraItemsStyles = {}
} : TodayForecastProps): React.JSX.Element {
  if (locationData === null) {
    return <></>
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
      <ForecastLayout 
        heading={config.heading} 
        layout={config.layout} 
        locationData={DayHourlyWeather} 
        extraStyles={extraStyles}
        outerStyles={outerStyles}
        outerItemStyles={outerItemStyles}
        itemsType={config.itemsType}
        extraItemsStyles={extraItemsStyles}
      />
    )
  }
}

