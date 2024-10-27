import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'


const props = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal
}

export default function TodayForecast({...props}): React.JSX.Element {
  return (
    <ForecastLayout heading={props.heading} layout={props.layout}/>
  )
}
