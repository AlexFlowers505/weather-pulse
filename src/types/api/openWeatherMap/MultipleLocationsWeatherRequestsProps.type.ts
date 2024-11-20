import { MappedSuggestions } from "../dadata/MappedSuggestions.type"
import { FetchWeatherCoordsBasedProps, FetchWeatherIdBasedProps } from "./FetchWeather.type"

export type MultipleLocationsWeatherRequestsProps = {
    data: (FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps | MappedSuggestions)[],
    isForecast?: boolean,
    units: string,
    isSuggestionsFetch: boolean,

}