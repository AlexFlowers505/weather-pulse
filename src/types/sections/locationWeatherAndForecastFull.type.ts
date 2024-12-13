import { WholeLocationData } from "../overalls/wholeLocationData.type"

export type LocationWeatherAndForecastFullProps = Omit<WholeLocationData, 'forecast'>