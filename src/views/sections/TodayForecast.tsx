import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'


const localProps = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal,
  extraStyles: ''
}

export default function TodayForecast({...props}): React.JSX.Element {
  return (
    <ForecastLayout heading={localProps.heading} layout={localProps.layout}/>
  )
}
