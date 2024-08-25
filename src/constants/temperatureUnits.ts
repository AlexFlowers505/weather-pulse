import svgSymbolsIDs from "./svgSymbolsIDs"

export enum UnitsType {
    metric = 'metric',
    imperial = 'imperial',
} 

export type temperatureUnitType = {
    name: string
    fullName: string
    __type: UnitsType
    symbol: string
    icon: string
}

type temperatureUnitsType = {
    [key: string]: temperatureUnitType
}

const temperatureUnits: temperatureUnitsType = {
    celsius: {
        name: 'Цельсий',
        fullName: `градусы по Цельсию`,
        __type: UnitsType.metric,
        symbol: '℃',
        icon: svgSymbolsIDs.iconCelsius
    },
    fahrenheit: {
        name: 'Фаренгейт',
        fullName: `градусы по Фаренгейту`,
        __type: UnitsType.imperial,
        symbol: '°F',
        icon: svgSymbolsIDs.iconFahrenheit
    }
} as const

export default temperatureUnits