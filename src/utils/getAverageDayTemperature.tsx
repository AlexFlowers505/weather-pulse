export const getAverageDayTemperature = (weatherByDay: any[]) => {
    let averageDayWeather: any
    weatherByDay.map((day: any) => {
        const temperatureByHour = day.map((hour: any) => hour.main.temp)
        averageDayWeather.push(Math.round(temperatureByHour.reduce((a: number, b: number) => a + b) / temperatureByHour.length))
    })

    return averageDayWeather
}