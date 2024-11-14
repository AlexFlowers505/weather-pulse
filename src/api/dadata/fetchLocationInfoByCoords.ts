import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { SuggestionsData } from "../../types/api/dadata/SuggestionsData.type"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"
import { getFetchByCoordsOptionsConfig } from "./getFetchByCoordsOptionsConfig"

export async function fetchLocationInfoByCoords(lat: string, lon: string): Promise<MappedSuggestions[]> {
    const fetchOptions = getFetchByCoordsOptionsConfig(lat, lon)
    
    try {
      const response = await fetch(config.geolocateEntryURL, fetchOptions)
      const data = await response.json()
  
      const location: MappedSuggestions[] = data.suggestions.map(
        (suggestion: { data: SuggestionsData }) => ({
          country: suggestion.data.country,
          area: suggestion.data.city || suggestion.data.settlement,
          region: suggestion.data.region_with_type,
          lat: lat,
          lon: lon,
          settlementType: suggestion.data.city_type || suggestion.data.settlement_type
        })
      )
  
      console.log('Location by coordinates', location)
      return location
  
    } catch (error) {
      console.error('Error fetching location by coordinates:', error)
      return []
    }
  }