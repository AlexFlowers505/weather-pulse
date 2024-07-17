import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates
const twStyles = {
    container: `
        absolute
        top-20
        w-full
        px-3 
        py-3 
        shadow-md
    `,
    list: `
        flex
        flex-col
        gap-1
    `
}
const { container, list } = twStyles

const loaderSkeletonProps = {
    blocksQnt: 5,
    skeletonsPerBlock: 2
}

export default function SearchResults({loading, suggestions=[]}) {
  return (
    <>
        { 
            loading == IDLE ? null :
            <div className={`search-results container-visuals--custom-p ${container}`}>
                <ul className={`search-results-list ${list}`}>
                    {loading == LOADING ? generateLoaderSkeletons(loaderSkeletonProps.blocksQnt, loaderSkeletonProps.skeletonsPerBlock)
                    : loading == NO_RESULTS ? console.log('hey')
                    : loading == ERROR ? console.log('hey')
                    : loading == SUCCESS ?
                            <>
                                <SearchResult />
                                <hr className={`border-lineColor mx-2`}/>
                                <SearchResult />
                                <hr className={`border-lineColor mx-2`}/>
                                <SearchResult />
                                <hr className={`border-lineColor mx-2`}/>
                                <SearchResult />
                                <hr className={`border-lineColor mx-2`}/>
                                <SearchResult />
                            </>
                    : null
                    }
                
                </ul>
            </div>
        }
    </>
  )
}