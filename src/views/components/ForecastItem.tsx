import React, { useEffect, useState } from 'react'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { symbolDegree } from '../../constants/symbols'
import { fetchIcon } from '../../api/openWeatherMap'
import { locationWeatherElmDataType } from './ForecastLayout'

type forecastItemPropType = {
    layout: forecastLayoutTypes
    weatherData: locationWeatherElmDataType
}
export default function ForecastItem({layout, weatherData}: forecastItemPropType): React.JSX.Element {
    const layoutStyles = 
        layout === forecastLayoutTypes.vertical ? tw.forecastItemHorizontalLayout : 
        layout === forecastLayoutTypes.horizontal ? tw.forecastItemVerticalLayout :
        layout === forecastLayoutTypes.lgVertical ? tw.forecastItemLgVerticalLayout : ''
    const { timeOrDay, temperature, icon } = weatherData
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const url = await fetchIcon(icon)
                setIconUrl(url)
            } catch (error) {
                console.error('Error fetching icon:', error)
            }
        }

        loadIcon()
    }, [weatherData])
    console.log('weatherData', weatherData)

    return (
    <div className={`forecast-item ${layoutStyles}`}>
        <span className={`forecast-item-time ${tw.forecastItemTime}`}>{timeOrDay}</span>
        <img className={`forecast-item-pic ${tw.forecastItemPic}`} src={iconUrl} />
        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperature}{symbolDegree}</span>
    </div>
    )
}
