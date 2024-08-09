type weatherPicturesNamesType = {
    names: {[key: string]: string}
    fileType: string
    path: string
}

const weatherPicturesNames: weatherPicturesNamesType = {
    names: {
        cloudyAndAbitSunny: 'cloudy-and-a-bit-sunny',
        cloudyAndSunny: 'cloudy-and-sunny',
        cloudy: 'cloudy',
        rainAndThunder: 'rain-and-thunder',
        rain: 'rain',
        snowy: 'snowy',
        sunnyAndCloudyAndRain: 'sunny-and-cloudy-and-rain',
        sunny: 'sunny',
        thunder: 'thunder',
        veryCloudy: 'very-cloudy',
    },
    fileType: `.png`,
    path: '/assets/images/weather-pictures/'
} as const


export default weatherPicturesNames