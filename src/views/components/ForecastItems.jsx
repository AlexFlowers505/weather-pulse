import ForecastItem from './ForecastItem'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'
import { forecastItemsStyle as tw } from '../../styles/components/ForecastItems.style.tsx'

export default function ForecastItems({layout}) {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.verticalLayout : layout === forecastLayoutTypes.horizontal ? tw.horizontalLayout : ''

    return (
        <div className={`forecast-items ${layoutStyles}`}>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
            <ForecastItem layout={layout}/>
        </div>  
    )
}
