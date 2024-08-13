import React from 'react'
import ForecastLayout from '../components/ForecastLayout.tsx'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'

const props = {
    heading: 'Прогноз на 7 дней',
    layout: forecastLayoutTypes.vertical
  }

export default function SevenDaysForecast(): React.JSX.Element {
  return (
    <ForecastLayout heading={props.heading} layout={props.layout}/>
  )
}