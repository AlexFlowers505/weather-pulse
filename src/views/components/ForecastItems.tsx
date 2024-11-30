import React from "react"
import ForecastHourItem from "./ForecastHourItem"
import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { AverageDayNnightWeather } from "../../types/overalls/averageDayNnightWeather.type"
import { getLayoutStyle } from "../../utils/getLayoutStyle"
import FORECAST_ITEMS from "../../constants/forecastItems"
import { DayHourlyWeather } from "../../types/overalls/dayHourlyWeather"
import ForecastDayItem from "./ForecastDayItem"

type forecastItemsPropType = {
  layout: FORECAST_LAYOUTS
  locationData: AverageDayNnightWeather[] | DayHourlyWeather[] | null
  itemsType: FORECAST_ITEMS
};
export default function ForecastItems({ layout, locationData, itemsType }: forecastItemsPropType): React.JSX.Element {
  const layoutStyles = getLayoutStyle(layout)
  return (
    <div className={`forecast-items ${layoutStyles}`}>
      {(locationData &&
        itemsType === FORECAST_ITEMS.hourData &&
        locationData.map((elm: any, i: number) => {
          return <ForecastHourItem key={i} layout={layout} weatherData={elm} />
        })) ||
        (locationData &&
          itemsType === FORECAST_ITEMS.dayData &&
          locationData.map((elm: any, i: number) => {
            return <ForecastDayItem key={i} layout={layout} weatherData={elm} />
          }))}
    </div>
  )
}
