type openWeatherMapAPIiconsNamesType = {
    conditions: {
        [key: string]: string
        fewClouds: string
        scatteredClouds: string
        brokenClouds: string
        showerRain: string
        rain: string
        thunderstorm: string
        snow: string
        mist: string
    }
    timeModifiers: {
        day: string
        night: string
    }
}

export const openWeatherMapAPIiconsNames: openWeatherMapAPIiconsNamesType = {
    conditions: {
        clearSky: '01',
        fewClouds: '02',
        scatteredClouds: '03',
        brokenClouds: '04',
        showerRain: '09',
        rain: '10',
        thunderstorm: '11',
        snow: '13',
        mist: '50'
    },
    timeModifiers: {
        day: 'd',
        night: 'n'
    }
}