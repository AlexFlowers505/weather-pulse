export const getAverageDayTemperature = ( dayWeatherByHour: any[]) => {
    const temperatureByHour = dayWeatherByHour.map( (hour: any) => hour.main.temp)
    const averageTemperature = Math.round(temperatureByHour.reduce((a: number, b: number) => a + b) / temperatureByHour.length)

    return averageTemperature
}