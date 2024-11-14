export type FetchWeatherCoordsBasedProps = {
    lat: string,
    lon: string,
    isForecast?: boolean,
}

export type FetchWeatherIdBasedProps = {
    id: string,
    isForecast?: boolean,
}

export type FetchWeatherProps = FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps