export type EntryURLType = (modifier: string) => string

export type ModifiersType = {
    [key: string]: string
}

export type OverallsConfigType = {
    entryURL: EntryURLType
    modifiers: ModifiersType
    apiKey: string | undefined
}

export const overallsConfig: OverallsConfigType = {
    entryURL: (modifier: string): string => `https://suggestions.dadata.ru/suggestions/api/4_1/rs/${modifier}/address`,
    modifiers: {
        suggestions: `suggest`,
        geolocation: `geolocate`
    },
    apiKey: process.env.REACT_APP_DADATA_API_KEY
}
