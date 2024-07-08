const key = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const entryURL =  `https://api.openweathermap.org/`

export async function fetchWeather(location = 'London') {
    let url = `${entryURL}data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`
    console.log(url)
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
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}