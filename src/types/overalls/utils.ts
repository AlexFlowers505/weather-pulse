export type dadataMappedSuggestionsType = {
    area: string
    country: string
    lat: string
    lon: string
    region: string
    settlementType: string
}

export type tailwindStyleClassType = {
    [elm: string]: string | {[subElm: string]: string}
}

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>
