import FORECAST_LAYOUTS from "../constants/forecastLayouts"
import { forecastItemStyle as tw} from "../styles/components/ForecastItem.style"

export const getForecastItemLayoutStyle = (layout: FORECAST_LAYOUTS) => {
    const layoutStyles =
        layout === FORECAST_LAYOUTS.vertical ? tw.forecastItemHorizontalLayout : 
        layout === FORECAST_LAYOUTS.horizontal ? tw.forecastItemVerticalLayout : 
        layout === FORECAST_LAYOUTS.lgVertical ? tw.forecastItemLgVerticalLayout : ''
    console.log('layoutStyles', layout)
    return layoutStyles
}