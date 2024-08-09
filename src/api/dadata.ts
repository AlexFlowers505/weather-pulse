import fetchOptions from "../constants/fetchingSuggestionsSettings.ts"

type fetchOptionsType = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': string
  },
  body: string
}

type suggestionDataType = {
  country: string
  city: string
  settlement: string
  region_with_type: string
  geo_lat: string
  geo_lon: string
  city_type: string
  settlement_type: string
}

type locationType = {
  country: string
  area: string
  region: string
  lat: string
  lon: string
  settlementType: string
}

export async function fetchAreasSuggestions(query: string): Promise<locationType[]> {
  const key = process.env.REACT_APP_DADATA_API_KEY as string
  const entryURL = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`

  if (query) {
    const options: fetchOptionsType = {
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

      const locationsWithRegion: locationType[] = data.suggestions
        .map((suggestion: { data: suggestionDataType }) => ({
          country: suggestion.data.country,
          area: suggestion.data.city || suggestion.data.settlement,
          region: suggestion.data.region_with_type,
          lat: suggestion.data.geo_lat,
          lon: suggestion.data.geo_lon,
          settlementType: suggestion.data.city_type || suggestion.data.settlement_type
        }))
        .filter(location => location.area !== '')

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