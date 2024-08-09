type fetchingSuggestionsSettingsType = {
    minRequestSymbolsQnt: number
    suggestionsQnt: number
    debounceTimeInMilisec: number
}

const fetchingSuggestionsSettings: fetchingSuggestionsSettingsType = {
    minRequestSymbolsQnt: 2,
    suggestionsQnt: 5,
    debounceTimeInMilisec: 550
} as const

export default fetchingSuggestionsSettings