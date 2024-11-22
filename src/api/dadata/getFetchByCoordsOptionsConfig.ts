import { overallsConfig as config } from "../../config/api/dadata/overalls.config"
import { FetchOptions } from "../../types/api/dadata/FetchOptions.type"

export const getFetchByCoordsOptionsConfig = (lat: number, lon: number): FetchOptions => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${config.apiKey}`,
      },
      body: JSON.stringify({
        lat: lat,
        lon: lon,
        count: 1,
      }),
      method: 'POST',
    }
  }