type Coord = {
    lat: number
    lon: number
}
type DateTimestamp = number
type Weather = {
    id: number
    main: string
    description: string
    icon: string
}
type WeatherMain = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
}
type Clouds = {
    all: number
}
type Wind = {
    speed: number
    deg: number
    gust: number
}
type Name = string
type Snow = {
    [key: string]: number
}
type Country = string
type Id = number
type ResponseBase = {
    visibility: number
    snow: Snow
    wind: Wind
    clouds: Clouds
    cod: number | string
}
type Timezone = number
type Sunrise = number
type Sunset = number
type City = {
    id: Id
    name: Name
    coord: Coord
    country: Country
    population: number
    timezone: Timezone
    sunrise: Sunrise
    sunset: Sunset
}
type System = {
    type: number
    id: number
    country: Country
    sunrise: Sunrise
    sunset: Sunset
}
type ForecastItem = {
    main: WeatherMain & { temp_kf: number }
    pop: number
    sys: { pod: string }
    dt_txt: string
    dt: DateTimestamp
    weather: Weather[]
}

export type WeatherResponse = ResponseBase & {
    id: Id
    name: Name
    coord: Coord
    base: string
    main: WeatherMain
    sys: System
    timezone: Timezone
    dt: DateTimestamp
    weather: Weather[]
}
export type ForecastResponse = ResponseBase & {
    list: Array<ForecastItem>
    city: City
    message: number
    cnt: number
}
export type OpenWeatherMapResponse = WeatherResponse | ForecastResponse