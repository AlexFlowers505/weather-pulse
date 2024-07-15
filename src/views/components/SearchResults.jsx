import React from 'react'
import SearchResult from './SearchResult'

const twStyles = {
    container: `
        absolute
        top-20
        w-full
    `,
    list: `
        flex
        flex-col
        gap-2
    `
}

export default function SearchResults() {
  return (
    <div className={`search-results container-visuals ${twStyles.container}`}>
        <ul className={`search-results-list ${twStyles.list}`}>
            <SearchResult />
            <SearchResult />
        </ul>
    </div>
  )
}
