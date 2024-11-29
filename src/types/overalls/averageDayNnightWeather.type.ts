export type TemperatureDayNnight = {
    day: number
    night: number
}

export type IconDayNnight = {
    day: string | null
    night: string | null
}

export type AverageDayNnightWeather =  {
    timeOrDay: string
    weekDay: string
    temperature: TemperatureDayNnight
    icon: IconDayNnight
}