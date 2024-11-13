import { FetchSuggestionsConfig } from "../../../types/api/dadata/FetchSuggestionsConfig.type"

export const fetchSuggestionsConfig: FetchSuggestionsConfig = {
    minRequestSymbolsQnt: 2,
    suggestionsQnt: 5,
    debounceTimeInMilisec: 550,
} as const
