import { FetchOptions } from "../../types/api/dadata/FetchOptions.type"
import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { SuggestionsData } from "../../types/api/dadata/SuggestionsData.type"
import { getFetchTextBasedLocationsSuggestionsOptions } from "./getFetchTextBasedLocationsSuggestionsOptions"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"

export async function fetchTextBasedLocationSuggestions(query: string): Promise<MappedSuggestions[]> {  
    if (query) {
      const options: FetchOptions = getFetchTextBasedLocationsSuggestionsOptions(query)

      try {
        const response = await fetch(config.entryURL(config.modifiers.suggestions), options)
        const data = await response.json()
  
        const locationsWithRegion: MappedSuggestions[] = data.suggestions
          .map((suggestion: { data: SuggestionsData }) => ({
            country: suggestion.data.country,
            area: suggestion.data.city || suggestion.data.settlement,
            region: suggestion.data.region_with_type,
            lat: suggestion.data.geo_lat,
            lon: suggestion.data.geo_lon,
            settlementType: suggestion.data.city_type || suggestion.data.settlement_type
          }))
          .filter((location: MappedSuggestions) => location.area !== '')
  
        console.log('suggestions', locationsWithRegion)
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