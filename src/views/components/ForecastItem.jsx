import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'
import { forecastItemStyle as tw } from '../../styles/components/ForecastItem.style'

export default function ForecastItem({layout}) {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.forecastItem.horizontalLayout : layout === forecastLayoutTypes.horizontal ? tw.forecastItem.verticalLayout : ''

    return (
    <div className={`forecast-item ${layoutStyles}`}>
        <span className={`forecast-item-time ${tw.forecastItemTime}`}>06:00</span>
        <img className={`forecast-item-pic ${tw.forecastItemPic}`} src='/assets/images/weather-pictures/sunny.png' />
        <span className={`forecast-item-temp ${tw.forecastItemTemp}`}>31°</span>
    </div>
    )
}
