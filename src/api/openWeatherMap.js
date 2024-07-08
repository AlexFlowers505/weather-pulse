const key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
const entryURL = 'https://api.openweathermap.org'

export async function fetchWeather(location=false) {
    const response = await fetch(`${entryURL}/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`)
    if (!response.ok) {
        throw new Error('Failed to fetch weather data')
    }
    const data = await response.json()
    console.log(data)
    return data
}