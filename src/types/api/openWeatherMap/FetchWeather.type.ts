export type FetchWeatherCoordsBasedProps = {
    lat: number,
    lon: number,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherIdBasedProps = {
    id: string,
    isForecast?: boolean,
    units: string
}

export type FetchWeatherProps = FetchWeatherCoordsBasedProps | FetchWeatherIdBasedProps