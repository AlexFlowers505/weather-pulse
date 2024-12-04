export type FetchWeatherCoordsBasedProps = {
    lat: number,
    lon: number,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherIdBasedProps = {
    id: number,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherProps = FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps