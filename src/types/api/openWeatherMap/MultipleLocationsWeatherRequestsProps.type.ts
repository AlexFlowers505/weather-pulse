import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps } from "./FetchWeather.type"

export type MultipleLocationsWeatherRequestsProps = {
    data: (FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps)[],
    isForecast: boolean
}