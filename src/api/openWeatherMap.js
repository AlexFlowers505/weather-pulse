
import temperatureUnits from "../constants/temperatureUnits.ts"
const {celsius, fahrenheit} = temperatureUnits

const key = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const entryURL =  `https://api.openweathermap.org/`

export const fetchIcon = async iconName => {
    const iconsURL = {
        entry: `https://openweathermap.org/`,
        iconPath: `img/wn/`,
        modifier: `@4x`,
        extention: `.png`
    }
    try {
        const url = `${iconsURL.entry}${iconsURL.iconPath}${iconName}${iconsURL.modifier}${iconsURL.extention}` 
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

export async function fetchLocationForecast(lat, lon, units=celsius.name) {
    let urlUnits = units === celsius.name ? celsius.__type : fahrenheit.__type
    let url = `${entryURL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${urlUnits}&lang=ru`
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

export async function fetchLocationsForecasts( locations, units=celsius.name ) {
    try {
        const forecastsArray = await Promise.all(
            locations.map(async elm => {
                const forecast = await fetchLocationForecast(elm.lat, elm.lon, units)
                return { ...elm, forecast }
            })
        )
        console.log('forecast')
        console.log(forecastsArray)
        return forecastsArray
    } catch (error) { console.error('Error fetching weather data:', error) }
}