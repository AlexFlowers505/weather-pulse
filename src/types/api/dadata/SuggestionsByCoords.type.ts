export type SuggestionsByCoords = {
  suggestions: Suggestion[]
}

export type Suggestion = {
  data: SuggestionsData
  value: string
  unrestricted_value: string
}

export type SuggestionsData = {
    country: string
    city: string
    settlement: string
    region_with_type: string
    geo_lat: string
    geo_lon: string
    city_type: string
    settlement_type: string
}