import React from 'react'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'

const className = {
    forecastItem: {
        verticalLayout: `
            flex
            flex-col
            justify-start
            items-center
            w-full
            `,
        horizontalLayout: `
            flex
            flex-row
            justify-between
            items-center
            w-full
            border-t-2 
            border-borderColor
        `
    },
    forecastItemTime: `
        text-text
        text-base
    `,
    forecastItemPic: `
        min-w-28
        w-28
        min-h-28
        h-28
        block
    `,
    forecastItemTemp: `
        text-text
        text-base
    `,
}
const {forecastItem, forecastItemTime, forecastItemPic, forecastItemTemp} = className


export default function ForecastItem({layout}) {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? forecastItem.horizontalLayout : layout === forecastLayoutTypes.horizontal ? forecastItem.verticalLayout : ''

    return (
    <div className={`forecast-item ${layoutStyles}`}>
        <span className={`forecast-item-time ${forecastItemTime}`}>06:00</span>
        <img className={`forecast-item-pic ${forecastItemPic}`} src='/assets/images/weather-pictures/sunny.png' />
        <span className={`forecast-item-temp ${forecastItemTemp}`}>31°</span>
    </div>
    )
}
