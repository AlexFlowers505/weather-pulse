export type localStorageKeysType = {
    [key: string]: string
}

export const localStorageKeys: localStorageKeysType = {
    temperatureUnits: 'temperature-units',
    favourites: 'favourite-locations',
    currentArea: 'current-area',
}