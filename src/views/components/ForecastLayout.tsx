import React from 'react'
import ForecastItems from './ForecastItems.tsx'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style.tsx'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'

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
