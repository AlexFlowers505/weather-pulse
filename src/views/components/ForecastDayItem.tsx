import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { symbolDegree } from '../../constants/symbols'
import { useFetchIcon } from '../../hooks/useFetchIcon'
import { getLayoutStyle } from '../../utils/getLayoutStyle'
import { ForecastDayItemProps } from '../../types/overalls/forecastDayItemProps.type'

export default function ForecastDayItem({ layout, weatherData }: ForecastDayItemProps): React.JSX.Element | null {
    const layoutStyles = getLayoutStyle(layout)
    const { timeOrDay, temperature, icon } = weatherData

    const iconDayUrl = useFetchIcon(weatherData, icon.day || '')
    const iconNightUrl = useFetchIcon(weatherData, icon.night || '')
    const temperatureDay = temperature.day
    const temperatureNight = temperature.night

    if (icon && temperature) {
        return (
            <div className={`forecast-item ${layoutStyles}`}>
                <span className={`forecast-item-time ${tw.forecastItemTime}`}>{timeOrDay}</span>
                <img className={`forecast-item-pic ${tw.forecastItemPic}`} src={iconDayUrl} />
                <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperatureDay}{symbolDegree}</span>
                <img className={`forecast-item-pic ${tw.forecastItemPic}`} src={iconNightUrl} />
                <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperatureNight}{symbolDegree}</span>
            </div>
        )
    } else return null
}

