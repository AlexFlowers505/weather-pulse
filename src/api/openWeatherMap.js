const key = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const entryURL =  `https://api.openweathermap.org/`

export async function fetchLocationForecast(lat, lon) {
    let url = `${entryURL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`
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

export async function fetchLocationsForecasts( locations ) {
    try {
        const forecastsArray = await Promise.all(
            locations.map(async elm => {
                const forecast = await fetchLocationForecast(elm.lat, elm.lon)
                return { ...elm, forecast }
            })
        )
        return forecastsArray
    } catch (error) { console.error('Error fetching weather data:', error) }
}