import React from "react"
import { MappedLocationShortData } from "../types/api/openWeatherMap/MappedLocationShortData.type"
import SearchResult from "../views/components/SearchResult"
import { SearchResultsStyle as tw } from '../styles/components/SearchResults.style'

export const generateSearchResults = (suggestions: MappedLocationShortData[], request: string): React.JSX.Element => {
    console.log('my sugg', suggestions[0])
    return (<>{
        suggestions.map( (sugg, i, arr) => {
            return (<React.Fragment key={i}>
                <SearchResult {...sugg} request={request} />
                { arr.length-1 > i ? <hr className={`${tw.horLine}`}/> : null }
            </React.Fragment>)
        })
    }</>)
}