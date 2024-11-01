import React, { useEffect, useState } from 'react'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { DateFormatter } from '../../utils/getDateTime'
import { symbolDegree } from '../../constants/symbols'
import { fetchIcon } from '../../api/openWeatherMap'

type forecastItemPropType = {
    layout: forecastLayoutTypes
    weatherData?: any
}
export default function ForecastItem({layout, weatherData}: forecastItemPropType): React.JSX.Element {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.forecastItemHorizontalLayout : layout === forecastLayoutTypes.horizontal ? tw.forecastItemVerticalLayout : ''
    const weatherTime = new DateFormatter(weatherData.dt).getHoursAndMinutes()
    const temperature = Math.round(weatherData.main.temp)
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const url = await fetchIcon(weatherData.weather[0].icon)
                setIconUrl(url)
            } catch (error) {
                console.error('Error fetching icon:', error)
            }
        }

        loadIcon()
    }, [weatherData])

    return (
    <div className={`forecast-item ${layoutStyles}`}>
        <span className={`forecast-item-time ${tw.forecastItemTime}`}>{weatherTime}</span>
        <img className={`forecast-item-pic ${tw.forecastItemPic}`} src={iconUrl} />
        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperature}{symbolDegree}</span>
    </div>
    )
}
