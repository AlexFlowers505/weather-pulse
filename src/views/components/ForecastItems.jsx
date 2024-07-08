import React from 'react'
import ForecastItem from './ForecastItem'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'

const className = {
    horizontalLayout: `
        flex
        flex-row
        justify-between
        items-center
    `,
    verticalLayout: `
        flex
        flex-col
        justify-between
        items-start
    `,
}
const {horizontalLayout, verticalLayout} = className

export default function ForecastItems({layout}) {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? verticalLayout : layout === forecastLayoutTypes.horizontal ? horizontalLayout : ''

    return (
        <div className={`forecast-items ${layoutStyles}`}>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
        </div>  
    )
}
