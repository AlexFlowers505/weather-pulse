const key = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const entryURL =  `https://api.openweathermap.org/`

export async function fetchWeather(location = 'London') {
    let url = `${entryURL}data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`
    let url2 = `${entryURL}geo/1.0/direct?q=moscow,RU&limit=5&appid=${key}&lang=ru`
    let url3 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=mos&countryIds=RU&limit=5`
    try {
        const response = await fetch(url2)
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