import FORECAST_LAYOUTS from "../constants/forecastLayouts";
import { forecastItemsStyle as tw} from "../styles/components/ForecastItems.style";

export const getLayoutStyle = (layout: FORECAST_LAYOUTS) => {
    const layoutStyles =
        layout === FORECAST_LAYOUTS.vertical ? tw.verticalLayout : 
        layout === FORECAST_LAYOUTS.horizontal ? tw.horizontalLayout : 
        layout === FORECAST_LAYOUTS.lgVertical ? tw.lgVerticalLayout : ''

    return layoutStyles
}