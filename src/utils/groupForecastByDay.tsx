import { DateFormatter } from "./getDateTime"

export const groupForecastByDay = (weatherData: any) => {
    if (weatherData?.list) {
        const weatherByHours = weatherData.list
        let weatherByDay: any = []
        weatherByHours.map((elm: any, _i: number) => {
            const day = new DateFormatter(elm.dt).getDay()
            weatherByDay.indexOf(day) === -1 ? weatherByDay.push({ [day]: [elm] }) : weatherByDay[weatherByDay.indexOf(day)].push(elm)
        })

        return weatherByDay
    }
}