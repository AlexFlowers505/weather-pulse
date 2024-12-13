import React from 'react'
import ForecastItems from './ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style'
import { ForecastLayoutProps } from '../../types/overalls/forecastLayoutProps.type'
import FORECAST_ITEMS from '../../constants/forecastItems'
import WeatherHeaderRow from './WeatherHeaderRow'

export default function ForecastLayout({heading, subHeading, layout, extraStyles, locationData, itemsType, bgIcon }: ForecastLayoutProps): React.JSX.Element {
  return (
    <section className={`forecast container-visuals ${tw.wrapper} ${extraStyles}`}>
        <h6 className={tw.header}>{heading}</h6>
        { !!subHeading && <h6 className={tw.subHeading}>{subHeading}</h6> }
        { itemsType === FORECAST_ITEMS.dayData && <WeatherHeaderRow /> }
        { !!bgIcon && <svg className={tw.bgIcon}><use href={`#${bgIcon}`} /></svg> }
        <ForecastItems layout={layout} locationData={locationData} itemsType={itemsType} />
    </section>
  )
}
