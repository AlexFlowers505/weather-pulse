export type svgSymbolsIDsType = {
    iconAddToFavourite: string
    iconFavourite: string
    iconWeather: string
    iconLocation: string
    iconClose: string
    iconCelsius: string
    iconFahrenheit: string
    iconExpand: string
    iconRestart: string
    iconArrowInCircle: string
    iconSun: string
    iconMoon: string
    iconCalendar: string
}

const svgSymbolsIDs: svgSymbolsIDsType = {
    iconAddToFavourite: 'icon-add-to-favourite',
    iconFavourite: 'icon-favourite',
    iconWeather: 'icon-weather',
    iconLocation: 'icon-location',
    iconClose: 'icon-close',
    iconCelsius: 'icon-celsius',
    iconFahrenheit: 'icon-fahrenheit',
    iconExpand: 'icon-expand',
    iconRestart: 'icon-restart',
    iconArrowInCircle: 'icon-arrow-in-circle',
    iconSun: 'icon-sun',
    iconMoon: 'icon-moon',
    iconCalendar: 'icon-calendar'
} as const

export default svgSymbolsIDs