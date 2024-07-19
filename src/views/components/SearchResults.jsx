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

export default function SearchResults({loading, suggestions=[], request=''}) {      
    return (
    <>
        { 
            loading === IDLE ? null :
            <div className={`search-results container-visuals--custom-p ${container}`}>
                <ul className={`search-results-list ${list}`}>
                    {loading === LOADING ? generateLoaderSkeletons(loaderSkeletonProps.blocksQnt, loaderSkeletonProps.skeletonsPerBlock)
                    : loading === NO_RESULTS ? null
                    : loading === ERROR ? null
                    : loading === SUCCESS ?
                            <>
                                {
                                    suggestions.map( (sugg, i, arr) => {
                                        const { city, region, forecast } = sugg
                                        const locaNameMatch = request
                                        return (
                                            <>
                                                <SearchResult 
                                                    key={i}
                                                    locNameMatch={locaNameMatch}
                                                    locRegion={region}
                                                    locName={city}
                                                    locTemp={Math.round(forecast.main.temp)}
                                                    request={request}
                                                />
                                                { arr.length-1 > i ? <hr className={`border-lineColor mx-2`}/> : null }
                                            </>
                                        )
                                    })
                                }
                            </>
                    : null
                    }
                </ul>
            </div>
        }
    </>
  )
}