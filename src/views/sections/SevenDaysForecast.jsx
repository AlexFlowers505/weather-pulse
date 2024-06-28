import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'

const props = {
    heading: 'Прогноз на 7 дней',
    layout: forecastLayoutTypes.vertical
  }

export default function SevenDaysForecast() {
  return (
    <ForecastLayout heading={props.heading} layout={props.layout}/>
  )
}