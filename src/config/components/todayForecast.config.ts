import FORECAST_ITEMS from "../../constants/forecastItems";
import FORECAST_LAYOUTS from "../../constants/forecastLayouts";

export const todayForecastConfig = {
    heading: 'Прогноз на сегодня',
    layout: FORECAST_LAYOUTS.horizontal,
    extraStyles: '',
    shownHoursQnt: 6,
    itemsType: FORECAST_ITEMS.hourData
  }