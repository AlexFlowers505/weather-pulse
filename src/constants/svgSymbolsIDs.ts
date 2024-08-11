type svgSymbolsIDsType = {
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
} as const

export default svgSymbolsIDs