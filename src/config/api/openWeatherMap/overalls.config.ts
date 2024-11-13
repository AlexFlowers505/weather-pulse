export const overallsConfig = {
    entryURL:<string> `https://api.openweathermap.org/data/2.5/`,
    specificPaths: {
        weather: 'weather/',
        forecast: 'forecast/',
        multipleLocations: 'group/',
    },
    apiKey:<string | undefined> process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
}