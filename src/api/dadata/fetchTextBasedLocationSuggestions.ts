import { FetchOptions } from "../../types/api/dadata/FetchOptions.type"
import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { Suggestion, SuggestionsData } from "../../types/api/dadata/SuggestionsByCoords.type"
import { getFetchTextBasedLocationsSuggestionsOptions } from "./getFetchTextBasedLocationsSuggestionsOptions"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"

export async function fetchTextBasedLocationSuggestions(query: string): Promise<MappedSuggestions[]> {  
    if (query) {
      const options: FetchOptions = getFetchTextBasedLocationsSuggestionsOptions(query)

      try {
        const response = await fetch(config.entryURL(config.modifiers.suggestions), options)
        const data = await response.json()
  
        const locationsWithRegion: MappedSuggestions[] = data.suggestions
          .map((suggestion: Suggestion ) => {
            const data: SuggestionsData = suggestion.data
            return {
              country: data.country,
              area: data.city || data.settlement,
              region: data.region_with_type,
              lat: data.geo_lat,
              lon: data.geo_lon,
              settlementType: data.city_type || data.settlement_type
            }
          })
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