import React from 'react'
import ForecastItems from './ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style'
import { ForecastLayoutProps } from '../../types/overalls/forecastLayoutProps.type'

export default function ForecastLayout({heading, layout, extraStyles='', locationData, itemsType }: ForecastLayoutProps): React.JSX.Element {
  return (
    <section className={`forecast container-visuals ${tw.wrapper} ${extraStyles}`}>
        <h6 className={tw.header}>{heading}</h6>
        <ForecastItems layout={layout} locationData={locationData} itemsType={itemsType} />
    </section>
  )
}
