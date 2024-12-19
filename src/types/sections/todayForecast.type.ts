import { ExplicitLocationWeather } from "../api/openWeatherMap/ExplicitLocationWeather.type"
import { TwStylesObject } from "../overalls/overalls"

export type TodayForecastProps = {
    locationData: ExplicitLocationWeather | null
    extraStyles?: string
    extraItemsStyles?: TwStylesObject
    outerStyles?: TwStylesObject
    outerItemStyles?: TwStylesObject
}