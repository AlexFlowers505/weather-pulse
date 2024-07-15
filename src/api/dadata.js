const key = process.env.REACT_APP_DADATA_API_KEY
const entryURL =  `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`

export async function fetchCitySuggestions(query) {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${key}`
      },
      body: JSON.stringify({
        query: query,
        count: 5,
        locations: [{ country: "Россия" }],
        from_bound: { value: "city" },
        to_bound: { value: "city" }
      })
    }
    try {
      const response = await fetch(entryURL, options)
      
      const data = await response.json()
      let citiesWithRegion = data.suggestions.map(suggestion => ({
        city: suggestion.data.city,
        region: suggestion.data.region_with_type
      }))
      return citiesWithRegion
    } catch (error) {
      console.error('Error fetching city suggestions:', error)
      return []
    }
  }