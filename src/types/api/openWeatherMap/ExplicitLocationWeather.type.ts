export type ExplicitLocationWeather = {
    temperature: number
    weatherIcon: string
    lat: number
    lon: number
    forecast: {
      timestamp: number
      temperature: number
      weatherIcon: string
    }[]
    id: number
    specificLocation: string
  }