import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { forecastDayItemStyle as extraTw } from '../../styles/components/ForecastDayItem.style'
import { symbolDegree } from '../../constants/symbols'
import { useFetchIcon } from '../../hooks/useFetchIcon'
import { ForecastDayItemProps } from '../../types/overalls/forecastDayItemProps.type'
import { getForecastItemLayoutStyle } from '../../utils/getForecastItemLayoutStyle'

export default function ForecastDayItem({ layout, weatherData }: ForecastDayItemProps): React.JSX.Element | null {
    const layoutStyles = getForecastItemLayoutStyle(layout)
    const { timeOrDay, temperature, icon } = weatherData

    const iconDayUrl = useFetchIcon(weatherData, icon.day || '')
    const iconNightUrl = useFetchIcon(weatherData, icon.night || '')
    const temperatureDay = temperature.day
    const temperatureNight = temperature.night

    if (icon && temperature) {
        return (
            <div className={`forecast-item ${layoutStyles} ${extraTw.forecastDayItem}`}>
                <span className={`forecast-item-time ${tw.forecastItemTime}`}>{timeOrDay}</span>
                <div className={`forecast-item-weather-outer-wrapper ${extraTw.forecastItemWeatherOuterWrapper}`}>
                    <div className={`foreacst-item-weather-wrapper ${extraTw.forecastItemWeatherWrapper}`}>
                        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperatureDay}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${extraTw.forecastItemPic}`} src={iconDayUrl} />
                    </div>
                    <div className={`foreacst-item-weather-wrapper ${extraTw.forecastItemWeatherWrapper}`}>
                        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>{temperatureNight}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${extraTw.forecastItemPic}`} src={iconNightUrl} />
                    </div>
                </div>
            </div>
        )
    } else return null
}

