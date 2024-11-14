export const overallsConfig = {
    suggestionsEntryURL:<string> `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
    geolocateEntryURL:<string> `https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address`,
    apiKey:<string | undefined> process.env.REACT_APP_DADATA_API_KEY
}