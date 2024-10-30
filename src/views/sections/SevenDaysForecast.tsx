import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'

const localProps = {
    heading: 'Прогноз на 7 дней',
    layout: forecastLayoutTypes.vertical
  }

export default function SevenDaysForecast({...props}): React.JSX.Element {
  return (
    <ForecastLayout heading={localProps.heading} layout={localProps.layout} extraStyles={props.extraStyles}/>
  )
}