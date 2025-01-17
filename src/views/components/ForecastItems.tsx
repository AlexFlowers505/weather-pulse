import React from "react"
import ForecastHourItem from "./ForecastHourItem"
import FORECAST_LAYOUTS from "../../constants/forecastLayouts"
import { AverageDayNnightWeather } from "../../types/overalls/averageDayNnightWeather.type"
import { getLayoutStyle } from "../../utils/getLayoutStyle"
import FORECAST_ITEMS from "../../constants/forecastItems"
import { DayHourlyWeather } from "../../types/overalls/dayHourlyWeather"
import ForecastDayItem from "./ForecastDayItem"
import { forecastItemsStyle as tw } from "../../styles/components/ForecastItems.style"
import { TwStylesObject } from "../../types/overalls/overalls"

type forecastItemsPropType = {
  layout: FORECAST_LAYOUTS
  locationData: AverageDayNnightWeather[] | DayHourlyWeather[] | null
  itemsType: FORECAST_ITEMS
  outerItemStyles?: TwStylesObject
  extraItemsStyles?: TwStylesObject
}
export default function ForecastItems({ layout, locationData, itemsType, outerItemStyles = {}, extraItemsStyles = {} }: forecastItemsPropType): React.JSX.Element {
  const layoutStyles = getLayoutStyle(layout)
  return (
    <div className={`forecast-items ${layoutStyles} ${extraItemsStyles.layout}`}>
      {(locationData &&
        itemsType === FORECAST_ITEMS.hourData &&
        locationData.map((elm: any, i: number) => {
          return <ForecastHourItem key={i} layout={layout} weatherData={elm} />
        })) ||
        (locationData &&
          itemsType === FORECAST_ITEMS.dayData &&
          locationData.map((elm: any, i: number) => {
            return (
              <React.Fragment key={i}>
                {i !== 0 && <span className={`forecast-item-separator ${tw.separator} ${extraItemsStyles.separator}`}></span> }
                <ForecastDayItem layout={layout} weatherData={elm} outerItemStyles={outerItemStyles} />
              </React.Fragment>
            )
          }))}
    </div>
  )
}
