import React from 'react'
import ForecastItems from './ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'

type forecastLayoutPropsType = {
  heading: string
  layout: forecastLayoutTypes
}
export default function ForecastLayout({heading, layout}: forecastLayoutPropsType): React.JSX.Element {
  return (
    <section className={`forecast container-visuals ${tw.wrapper}`}>
        <h6 className={tw.header}>{heading}</h6>
        <ForecastItems layout={layout} />
    </section>
  )
}
