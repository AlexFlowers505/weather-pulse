import React from 'react'
import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { locationWholeDataType } from '../pages/AreaOverviewPage'


const localProps = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal,
  extraStyles: ''
}

export interface TodayForecastProps {
  locationData: locationWholeDataType | null
}

export default function TodayForecast({locationData}: TodayForecastProps): React.JSX.Element {
  if (locationData === null) {
    throw new Error('locationData is null')
  } else {
    console.log('locationDataTODAY', locationData)
    return (
      <ForecastLayout heading={localProps.heading} layout={localProps.layout} locationData={locationData}/>
    )

  }
}

