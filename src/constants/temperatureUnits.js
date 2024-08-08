import svgSymbolsIDs from "./svgSymbolsIDs.ts"

// __type is used as a part of an openWeatherMap api request url
export default {
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
}