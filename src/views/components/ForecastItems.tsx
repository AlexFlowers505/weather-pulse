import React from 'react'
import ForecastItem from './ForecastItem'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { forecastItemsStyle as tw } from '../../styles/components/ForecastItems.style'

type forecastItemsPropType = {
    layout: forecastLayoutTypes
}
export default function ForecastItems({layout}: forecastItemsPropType): React.JSX.Element {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.verticalLayout : layout === forecastLayoutTypes.horizontal ? tw.horizontalLayout : ''

    return (
        <div className={`forecast-items ${layoutStyles}`}>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
        </div>  
    )
}
