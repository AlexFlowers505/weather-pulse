import FORECAST_ITEMS from "../../constants/forecastItems"
import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import svgSymbolsIDs from "../../constants/svgSymbolsIDs"

const daysQnt = {
    qnt: 4,
    unit: 'дня'
}

export const fewDaysForecastConfig = {
    daysQnt: daysQnt.qnt,
    isTodayIncluded: false,
    heading: `Прогноз на ${daysQnt.qnt} ${daysQnt.unit}`,
    noDataText: 'Выберите локацию из списка',
    layout: FORECAST_LAYOUTS.lgVertical,
    forecastItems: FORECAST_ITEMS.dayData,
    noDataForecastItems: FORECAST_ITEMS.noData,
    noDataBgPic: svgSymbolsIDs.iconFavourite
}