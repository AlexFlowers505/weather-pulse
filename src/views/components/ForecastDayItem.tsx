import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { forecastDayItemStyle as extraTw } from '../../styles/components/ForecastDayItem.style'
import { symbolDegree } from '../../constants/symbols'
import { ForecastDayItemProps } from '../../types/overalls/forecastDayItemProps.type'
import { getForecastItemLayoutStyle } from '../../utils/getForecastItemLayoutStyle'
import IconWithTooltip from './IconWithTooltip'
import { iconWithTooltipConfig as config } from '../../config/components/iconWithTooltip'
import { getWeatherImgUrl } from '../../utils/getWeatherImgUrl'

export default function ForecastDayItem({ layout, weatherData, outerItemStyles = {} }: ForecastDayItemProps): React.JSX.Element | null {
    const layoutStyles = getForecastItemLayoutStyle(layout)
    const { timeOrDay, temperature, icon } = weatherData
    
    const iconDayUrl = getWeatherImgUrl(icon.day)
    const iconNightUrl = getWeatherImgUrl(icon.night)
    const temperatureDay = temperature.day
    const temperatureNight = temperature.night

    const isOuterItemStyles = Object.keys(outerItemStyles).length
    const styles = isOuterItemStyles ? outerItemStyles : extraTw

    if (icon && temperature) {
        return (
            <div className={`forecast-item ${layoutStyles} ${styles.forecastDayItem}`}>
                <span className={`forecast-item-time ${tw.forecastItemTime} ${styles.forecastItemTime}`}>{timeOrDay}</span>
                <div className={`forecast-item-weather-outer-wrapper ${styles.forecastItemWeatherOuterWrapper}`}>
                    <div className={`foreacst-item-weather-wrapper ${styles.forecastItemWeatherWrapper}`}>
                        <IconWithTooltip text={config.dayWeather.text} style={styles.headerIconWrapper} iconID={config.dayWeather.iconID} />
                        <span className={`forecast-item-temp ${tw.forecastItemTemp} ${styles.forecastItemTemp}`}>{temperatureDay}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${styles.forecastItemPic}`} src={iconDayUrl} />
                    </div>
                    <span className={`forecast-item-inner-divider ${styles.innerSeparator}`}></span> 
                    <div className={`foreacst-item-weather-wrapper ${styles.forecastItemWeatherWrapper}`}>
                        <IconWithTooltip text={config.nightWeather.text} style={styles.headerIconWrapper} iconID={config.nightWeather.iconID} />
                        <span className={`forecast-item-temp ${tw.forecastItemTemp} ${styles.forecastItemTemp}`}>{temperatureNight}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${styles.forecastItemPic}`} src={iconNightUrl} />
                    </div>
                </div>
            </div>
        )
    } else return null
}

