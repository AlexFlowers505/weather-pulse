import { btnStyles } from "../../styles/components/btn.style"
import { LocationWeatherAndForecastFullProps } from "../../types/sections/locationWeatherAndForecastFull.type"

export const getFavouriteBtnProps = (locationData: LocationWeatherAndForecastFullProps, isFavourite: boolean, extraStyles: string) => {
    return {
              btnSize: btnStyles.size.lg, 
              btnStyle: btnStyles.style.contentOnly,
              isFavourite,
              id: locationData.id,
              lat: locationData.lat,
              lon: locationData.lon,
              isSpecific: locationData.isSpecific,
              specificLocation: locationData.specificLocation,
              area: locationData.area,
              region: locationData.region,
              country: locationData.country,
              extraBtnClass: extraStyles
    }
}
export const locationWeatherAndForecastFullConfig = {
    favouriteBtnProps: getFavouriteBtnProps
}
