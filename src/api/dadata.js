import fetchOptions from "../constants/fetchingSuggestionsOptions"

const key = process.env.REACT_APP_DADATA_API_KEY
const entryURL =  `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`

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
        locations: [{ country: "Россия" }],
        from_bound: { value: "city" },
        to_bound: { value: "city" }
      })
    }
    try {
      const response = await fetch(entryURL, options)
      const data = await response.json()
  
      let citiesWithRegion = data.suggestions
      .filter(suggestion => suggestion.data.city_type === "г")
      .map(suggestion => ({
        city: suggestion.data.city,
        region: suggestion.data.region_with_type,
        lat: suggestion.data.geo_lat,
        lon: suggestion.data.geo_lon
      }))
      // console.log(citiesWithRegion)
      return citiesWithRegion
  
    } catch (error) {
      console.error('Error fetching city suggestions:', error)
      return []
    }
  } else console.log('empty request')
}