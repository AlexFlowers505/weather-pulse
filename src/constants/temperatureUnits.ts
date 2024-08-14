import svgSymbolsIDs from "./svgSymbolsIDs"

type temperatureUnitsType = {
    [key: string]: {
        name: string
        fullName: string
        __type: 'metric' | 'imperial'
        symbol: string
        icon: string
    }
}

const temperatureUnits: temperatureUnitsType = {
    celsius: {
        name: 'Цельсий',
        fullName: `градусы по Цельсию`,
        __type: `metric`,
        symbol: '℃',
        icon: svgSymbolsIDs.iconCelsius
    },
    fahrenheit: {
        name: 'Фаренгейт',
        fullName: `градусы по Фаренгейту`,
        __type: `imperial`,
        symbol: '°F',
        icon: svgSymbolsIDs.iconFahrenheit
    }
} as const

export default temperatureUnits