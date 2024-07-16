import React from 'react'
import SearchResult from './SearchResult'
import LoaderSkeleton from './LoaderSkeleton'
import LoaderSkeletonBlock from './LoaderSkeletonBlock'

const twStyles = {
    container: `
        absolute
        top-20
        w-full
    `,
    list: `
        flex
        flex-col
        gap-1
    `
}



export default function SearchResults() {
  return (
    <div className={`search-results container-visuals--custom-p px-3 py-3 ${twStyles.container}`}>
        {/* <ul className={`search-results-list ${twStyles.list}`}>
            <SearchResult />
            <hr className={`border-lineColor mx-2`}/>
            <SearchResult />
            <hr className={`border-lineColor mx-2`}/>
            <SearchResult />
            <hr className={`border-lineColor mx-2`}/>
            <SearchResult />
            <hr className={`border-lineColor mx-2`}/>
            <SearchResult />
        </ul> */}
        <ul className={`search-results-list ${twStyles.list}`}>
            <LoaderSkeletonBlock />
            <hr className={`border-lineColor mx-2`}/>
            <LoaderSkeletonBlock />
            <hr className={`border-lineColor mx-2`}/>
            <LoaderSkeletonBlock />
            <hr className={`border-lineColor mx-2`}/>
            <LoaderSkeletonBlock />
            <hr className={`border-lineColor mx-2`}/>
            <LoaderSkeletonBlock />
        </ul>
    </div>
  )
}
