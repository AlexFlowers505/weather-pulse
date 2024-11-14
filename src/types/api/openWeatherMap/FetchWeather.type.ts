export type FetchWeatherCoordsBasedProps = {
    lat: string,
    lon: string,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherIdBasedProps = {
    id: string,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherProps = FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps