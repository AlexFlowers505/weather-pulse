import { MappedSuggestions } from "../../types/api/dadata/MappedSuggestions.type"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"
import { getFetchByCoordsOptionsConfig } from "./getFetchByCoordsOptionsConfig"

export async function fetchLocationInfoByCoords(lat: number, lon: number): Promise<MappedSuggestions> {
    const fetchOptions = getFetchByCoordsOptionsConfig(lat, lon)
    
    try {
      const response = await fetch(config.entryURL(config.modifiers.geolocation), fetchOptions)
      const data = await response.json()
  
      const location: MappedSuggestions = {
          country: data.country,
          area: data.city || data.settlement,
          region: data.region_with_type,
          lat: lat,
          lon: lon,
      }
  
      console.log('Location by coordinates', location)
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