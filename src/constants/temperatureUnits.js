import svgSymbols from "./svgSymbols"

// __type is used as a part of an openWeatherMap api request url
export default {
    celsius: {
        name: 'Цельсий',
        fullName: `градусы по Цельсию`,
        __type: `metric`,
        symbol: '℃',
        icon: svgSymbols.iconCelsius
    },
    fahrenheit: {
        name: 'Фаренгейт',
        fullName: `градусы по Фаренгейту`,
        __type: `imperial`,
        symbol: '°F',
        icon: svgSymbols.iconFahrenheit
    }
}