import React from 'react'
import ForecastItems from './ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { AverageDayNnightWeather } from '../../types/overalls/averageDayNnightWeather.type'

export type locationWeatherElmDataType = AverageDayNnightWeather
type forecastLayoutPropsType = {
  heading: string
  layout: forecastLayoutTypes
  extraStyles?: string
  locationData: locationWeatherElmDataType[] | null
}
export default function ForecastLayout({heading, layout, extraStyles='', locationData }: forecastLayoutPropsType): React.JSX.Element {
  return (
    <section className={`forecast container-visuals ${tw.wrapper} ${extraStyles}`}>
        <h6 className={tw.header}>{heading}</h6>
            <ForecastItems layout={layout} locationData={locationData} />
    </section>
  )
}
