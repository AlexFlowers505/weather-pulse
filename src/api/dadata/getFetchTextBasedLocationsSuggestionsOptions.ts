import { fetchSuggestionsConfig } from "../../config/api/dadata/fetchSuggestions.config"
import { overallsConfig as config } from "../../config/api/dadata/overalls.config"
import { FetchOptions } from "../../types/api/dadata/FetchOptions.type"

export const getFetchTextBasedLocationsSuggestionsOptions = (query: string): FetchOptions => {
    return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${config.apiKey}`
        },
        body: JSON.stringify({
          query: query,
          count: fetchSuggestionsConfig.suggestionsQnt,
          locations: [{ country: "*" }],
          from_bound: { value: "city" },
          to_bound: { value: "settlement" }
        })
    }
}