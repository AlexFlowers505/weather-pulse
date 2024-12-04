import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"
import { getFetchByCoordsOptionsConfig } from "./getFetchByCoordsOptionsConfig"
import { SuggestionsByCoords } from "../../types/api/dadata/SuggestionsByCoords.type"

export async function fetchLocationInfoByCoords(lat: number, lon: number): Promise<MappedSuggestions> {
    const fetchOptions = getFetchByCoordsOptionsConfig(lat, lon)
    
    try {
      const response = await fetch(config.entryURL(config.modifiers.geolocation), fetchOptions)
      const responseJSON: SuggestionsByCoords = (await response.json())
      const data = responseJSON.suggestions[0].data
  
      const location: MappedSuggestions = {
          country: data.country,
          area: data.city || data.settlement,
          region: data.region_with_type,
          lat: lat,
          lon: lon,
      }
      
      return location
  
    } catch (error) {
      console.error('Error fetching location by coordinates:', error)
      return {
        country: '',
        area: '',
        region: '',
        lat: NaN,
        lon: NaN,
      }
    }
  }