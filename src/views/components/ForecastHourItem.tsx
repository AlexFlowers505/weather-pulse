import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { symbolDegree } from '../../constants/symbols'
import { useFetchIcon } from '../../hooks/useFetchIcon'
import { getLayoutStyle } from '../../utils/getLayoutStyle'
import { ForecastHourItemProps } from '../../types/overalls/forecastHourItemProps.type'
import { useEffect, useState } from 'react'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'


export default function ForecastHourItem({layout, weatherData}: ForecastHourItemProps): React.JSX.Element {
    const layoutStyles = getLayoutStyle(layout)
    const { timeOrDay, temperature, icon } = weatherData
    const iconUrl = useFetchIcon(weatherData, icon)
    return (
        <div className={`forecast-item ${layoutStyles}`}>
            <span className={`forecast-item-time ${tw.forecastItemTime}`}>{timeOrDay}</span>
            <img className={`forecast-item-pic ${tw.forecastItemPic}`} src={iconUrl} />
            <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperature}{symbolDegree}</span>
        </div>
    )
}
