import { temperatureUnits } from "../constants/temperatureUnits"
import { dadataMappedSuggestionsType } from "../types/overalls/overalls"
const { celsius, fahrenheit } = temperatureUnits

const key: string | undefined = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
if (!key) throw new Error("REACT_APP_DADATA_API_KEY is not defined")

const entryURL =  `https://api.openweathermap.org/`

type IconsURLType = Readonly<{
    entry: `https://openweathermap.org/`
    iconPath: `img/wn/`
    modifier: '@1x' | '@2x' | '@3x' | '@4x'
    extention: `.png`
}>

export async function fetchIcon(iconName: string): Promise<string> {
    const iconsURL: IconsURLType = {
        entry: `https://openweathermap.org/`,
        iconPath: `img/wn/`,
        modifier: `@4x`,
        extention: `.png`
    }
    const url: string = `${iconsURL.entry}${iconsURL.iconPath}${iconName}${iconsURL.modifier}${iconsURL.extention}` 

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error(`Failed to fetch icon: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather icon')
        }
        return url
    } catch (error) {
        console.error('Error fetching weather icon:', error)
        throw error
    }
}

type ForecastData = {
    [key: string]: any
}

export async function fetchLocationForecast(lat: string, lon: string, units: string = celsius.name): Promise<ForecastData> {
    const urlUnits = units === celsius.name ? celsius.__type : fahrenheit.__type
    const URLspecPath = 'data/2.5/weather'

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
            console.error(`Failed to fetch weather data: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather data')
        }
        const data: ForecastData = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}

export async function fetchLocationsForecasts(locations: dadataMappedSuggestionsType[], units: string = celsius.name): Promise<(dadataMappedSuggestionsType & { forecast: ForecastData })[]> {
    try {
        const forecastsArray = await Promise.all(
            locations.map(async location => {
                const forecast = await fetchLocationForecast(location.lat, location.lon, units)
                return { ...location, forecast }
            })
        )
        console.log('forecast', forecastsArray)
        return forecastsArray
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}