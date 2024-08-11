
import temperatureUnits from "../constants/temperatureUnits.ts"
const {celsius, fahrenheit} = temperatureUnits

const key: string | undefined = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
if (!key) throw new Error("REACT_APP_DADATA_API_KEY is not defined")

const entryURL =  `https://api.openweathermap.org/`

type iconsURLType = {
    entry: `https://openweathermap.org/`
    iconPath: `img/wn/`
    modifier: '@1x' | '@2x' | '@3x' | '@4x'
    extention: `.png`
}

export async function fetchIcon (iconName: string): Promise<string> {
    const iconsURL: iconsURLType = {
        entry: `https://openweathermap.org/`,
        iconPath: `img/wn/`,
        modifier: `@4x`,
        extention: `.png`
    }
    try {
        const url: string = `${iconsURL.entry}${iconsURL.iconPath}${iconName}${iconsURL.modifier}${iconsURL.extention}` 
        const response = await fetch(url)
        if (!response.ok) {
            console.group('Failed to fetch weather data')
                console.log(`status: ${response.status}`)
                console.log(`statusText: ${response.statusText}`)
                console.log(`url: ${response.url}`)
            console.groupEnd()
            throw new Error('Failed to fetch weather data')
        }
        return url
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

type fetchLocationForecastPropsType = {
    lat: number
    lon: number
    units: string
}

export async function fetchLocationForecast ({lat, lon, units = celsius.name}: fetchLocationForecastPropsType): Promise<any> {
    let urlUnits = units === celsius.name ? celsius.__type : fahrenheit.__type
    let URLspecPath = 'data/2.5/weather'

    const urlParams = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        units: urlUnits.toString(),
        appid: key!,
        lang: 'ru',
    })

    const url = `${entryURL}${URLspecPath}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.group('Failed to fetch weather data')
                console.log(`status: ${response.status}`)
                console.log(`statusText: ${response.statusText}`)
                console.log(`url: ${response.url}`)
            console.groupEnd()
            throw new Error('Failed to fetch weather data')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

type fetchLocationsForecastsPropsType = {
    locations: any,
    units: string
}
export async function fetchLocationsForecasts( {locations, units=celsius.name}: fetchLocationsForecastsPropsType ): Promise<any> {
    try {
        const forecastsArray = await Promise.all(
            locations.map(async (elm: {[key: string]: any}) => {
                const { lat, lon } = elm
                const forecast = await fetchLocationForecast({lat, lon, units})
                return { ...elm, forecast }
            })
        )
        console.log('forecast')
        console.log(forecastsArray)
        return forecastsArray
    } catch (error) { console.error('Error fetching weather data:', error) }
}