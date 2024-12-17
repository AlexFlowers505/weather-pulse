import React from 'react'
import ForecastItems from './ForecastItems'
import { forecastLayoutStyle as tw } from '../../styles/components/ForecastLayout.style'
import { ForecastLayoutProps } from '../../types/overalls/forecastLayoutProps.type'
import FORECAST_ITEMS from '../../constants/forecastItems'
import WeatherHeaderRow from './WeatherHeaderRow'

export default function ForecastLayout({heading, subHeading, layout, extraStyles, locationData, itemsType, bgIcon, outerStyles = {}, outerItemStyles = {} }: ForecastLayoutProps): React.JSX.Element {
  const isOuterStyles = Object.keys(outerStyles).length
  const styles = isOuterStyles ? outerStyles : tw
  

  return (
    <section className={`forecast ${styles.wrapper} ${extraStyles}`}>
        <h6 className={styles.header}>{heading}</h6>
        { !!subHeading && <h6 className={styles.subHeading}>{subHeading}</h6> }
        { itemsType === FORECAST_ITEMS.dayData && <WeatherHeaderRow /> }
        { !!bgIcon && <svg className={styles.bgIcon}><use href={`#${bgIcon}`} /></svg> }
        <ForecastItems layout={layout} locationData={locationData} itemsType={itemsType} outerItemStyles={outerItemStyles} />
    </section>
  )
}
