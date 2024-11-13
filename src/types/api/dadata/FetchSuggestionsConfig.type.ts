import { FetchOptions } from "./FetchOptions.type"

export type FetchSuggestionsConfig = {
    minRequestSymbolsQnt: number
    suggestionsQnt: number
    debounceTimeInMilisec: number
}