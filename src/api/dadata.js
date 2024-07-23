import fetchOptions from "../constants/fetchingSuggestionsOptions"

const key = process.env.REACT_APP_DADATA_API_KEY
const entryURL = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`

export async function fetchCitySuggestions(query) {

  if (query) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${key}`
      },
      body: JSON.stringify({
        query: query,
        count: fetchOptions.suggestionsQnt,
        locations: [{ country: "*" }],
        from_bound: { value: "city" },
        to_bound: { value: "settlement" }
      })
    }
    try {
      const response = await fetch(entryURL, options)
      const data = await response.json()

      let locationsWithRegion = data.suggestions
        .map(suggestion => ({
          country: suggestion.data.country,
          locality: suggestion.data.city || suggestion.data.settlement,
          region: suggestion.data.region_with_type,
          lat: suggestion.data.geo_lat,
          lon: suggestion.data.geo_lon,
          settlementType: suggestion.data.city_type || suggestion.data.settlement_type
        }))
        .filter(location => location.locality)

      console.log('suggestions')
      console.log(locationsWithRegion)
      return locationsWithRegion

    } catch (error) {
      console.error('Error fetching location suggestions:', error)
      return []
    }
  } else {
    console.log('empty request')
    return []
  }
}