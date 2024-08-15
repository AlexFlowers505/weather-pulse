import React from 'react'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'

type forecastItemPropType = {
    layout: forecastLayoutTypes
}
export default function ForecastItem({layout}: forecastItemPropType): React.JSX.Element {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.forecastItemHorizontalLayout : layout === forecastLayoutTypes.horizontal ? tw.forecastItemVerticalLayout : ''

    return (
    <div className={`forecast-item ${layoutStyles}`}>
        <span className={`forecast-item-time ${tw.forecastItemTime}`}>06:00</span>
        <img className={`forecast-item-pic ${tw.forecastItemPic}`} src='/assets/images/weather-pictures/sunny.png' />
        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>31°</span>
    </div>
    )
}
