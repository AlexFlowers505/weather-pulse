import { TwStylesObject } from "../overalls/overalls"
import { WholeLocationData } from "../overalls/wholeLocationData.type"

export type LocationCurrentWeatherProps = Omit<WholeLocationData, 'forecast'> & {outerStyles?: TwStylesObject} & {hasFavouriteBtn?: boolean}
