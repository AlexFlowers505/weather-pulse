type fetchingSuggestionsSettingsType = {
    [key: string]: number
}

const fetchingSuggestionsSettings: fetchingSuggestionsSettingsType = {
    minRequestSymbolsQnt: 2,
    suggestionsQnt: 5,
    debounceTimeInMilisec: 550
}

export default fetchingSuggestionsSettings