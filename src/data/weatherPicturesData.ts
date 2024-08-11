type weatherPictureDataType = {
    img: string
    alt: string
}

type weatherPicturesDataType = {
    cloudy: weatherPictureDataType
    cloudyAndAbitSunny: weatherPictureDataType
    cloudyAndSunny: weatherPictureDataType
    rain: weatherPictureDataType
    rainAndThunder: weatherPictureDataType
    snowy: weatherPictureDataType
    sunny: weatherPictureDataType
    sunnyAndCloudyAndRain: weatherPictureDataType
    thunder: weatherPictureDataType
    veryCloudy : weatherPictureDataType
}

const weatherPicturesData: weatherPicturesDataType = {
    cloudy: {
        img: 'cloudy',
        alt: 'Облачно'
    },
    cloudyAndAbitSunny: {
        img: 'cloudy-and-a-bit-sunny',
        alt: 'Облачно и мало солнца'
    },
    cloudyAndSunny: {
        img: 'cloudy-and-sunny',
        alt: 'Облачно и солнце'
    },
    rain: {
        img: 'rain',
        alt: 'Дождь'
    },
    rainAndThunder: {
        img: 'rain-and-thunder',
        alt: 'Дождь с грозой'
    },
    snowy: {
        img: 'snowy',
        alt: 'Снежно'
    },
    sunny: {
        img: 'sunny',
        alt: 'Солнечно'
    },
    sunnyAndCloudyAndRain: {
        img: 'sunny-and-cloudy-and-rain',
        alt: 'Облачно с дождем и солнце'
    },
    thunder: {
        img: 'thunder',
        alt: 'Гроза'
    },
    veryCloudy: {
        img: 'very-cloudy',
        alt: 'Очень облачно'
    },
    
}