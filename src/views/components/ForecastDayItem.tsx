import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'
import { forecastDayItemStyle as extraTw } from '../../styles/components/ForecastDayItem.style'
import { symbolDegree } from '../../constants/symbols'
import { useFetchIcon } from '../../hooks/useFetchIcon'
import { ForecastDayItemProps } from '../../types/overalls/forecastDayItemProps.type'
import { getForecastItemLayoutStyle } from '../../utils/getForecastItemLayoutStyle'
import CustomTooltip from './CustomTooltip'
import svgSymbolsIDs from '../../constants/svgSymbolsIDs'

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
                <span className={`forecast-item-time ${tw.forecastItemTime} ${extraTw.forecastItemTime}`}>{timeOrDay}</span>
                <div className={`forecast-item-weather-outer-wrapper ${extraTw.forecastItemWeatherOuterWrapper}`}>
                    <div className={`foreacst-item-weather-wrapper ${extraTw.forecastItemWeatherWrapper}`}>
                        <CustomTooltip title={'Средняя погода днем'} placement="top">
                            <span className={`header-icon-wrapper ${extraTw.headerIconWrapper}`}>
                                <svg className={`header-icon ${extraTw.headerIcon}`}><use href={`#${svgSymbolsIDs.iconSun}`} /></svg>
                            </span>
                        </CustomTooltip>
                        <span className={`forecast-item-temp ${tw.forecastItemTemp} ${extraTw.forecastItemTemp}`}>{temperatureDay}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${extraTw.forecastItemPic}`} src={iconDayUrl} />
                    </div>
                    <span className={`forecast-item-inner-divider ${extraTw.innerSeparator}`}></span> 
                    <div className={`foreacst-item-weather-wrapper ${extraTw.forecastItemWeatherWrapper}`}>
                        <CustomTooltip title={'Средняя погода ночью'} placement="top">
                            <span className={`header-icon-wrapper ${extraTw.headerIconWrapper}`}>
                                <svg className={`header-icon ${extraTw.headerIcon}`}><use href={`#${svgSymbolsIDs.iconMoon}`} /></svg>
                            </span>
                        </CustomTooltip>
                        <span className={`forecast-item-temp ${tw.forecastItemTemp} ${extraTw.forecastItemTemp}`}>{temperatureNight}{symbolDegree}</span>
                        <img className={`forecast-item-pic ${extraTw.forecastItemPic}`} src={iconNightUrl} />
                    </div>
                </div>
            </div>
        )
    } else return null
}

