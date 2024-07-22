import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"
import InfoMessage from './InfoMessage'
import { searchMessages } from '../../data/infoMessagesData'
import { SearchResultsStyle as tw } from '../../styles/components/SearchResults.style'

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

const loaderSkeletonProps = {
    blocksQnt: 5,
    skeletonsPerBlock: 2
}

const generateSearchResults = (suggestions, request) => {
    return (<>{
        suggestions.map( (sugg, i, arr) => {
            const { city, region, forecast } = sugg
            const { main: {temp} } = forecast
            const locNameMatch = request
            return (<>
                <SearchResult 
                    key={i}
                    locNameMatch={locNameMatch}
                    locRegion={region}
                    locName={city}
                    locTemp={Math.round(temp)}
                    request={request}
                />
                { arr.length-1 > i ? <hr className={`${tw.horLine}`}/> : null }
            </>)
        })
    }</>)
}

export default function SearchResults({fetchState, suggestions=[], request='', inputRef=null, setFetchState=null, setRequest=null, setRepeatFetch=null }) 
    { return (
    <>
        { 
            fetchState === IDLE ? null :
            <div className={`search-results container-visuals--custom-p ${tw.container}`}>
                <ul className={`search-results-list ${tw.list}`}>
                    {
                        fetchState === LOADING ? 
                            generateLoaderSkeletons(
                                loaderSkeletonProps.blocksQnt, 
                                loaderSkeletonProps.skeletonsPerBlock
                            )
                        : fetchState === NO_RESULTS ? 
                            <InfoMessage 
                                inputRef={inputRef} 
                                setFetchState={setFetchState} 
                                setRepeatFetch={setRepeatFetch}
                                request={request}
                                setRequest={setRequest} 
                                message={searchMessages.nothingFound} 
                            />
                        : fetchState === ERROR ? 
                            <InfoMessage 
                                inputRef={inputRef} 
                                setFetchState={setFetchState} 
                                setRepeatFetch={setRepeatFetch}
                                setRequest={setRequest} 
                                request={request}
                                message={searchMessages.fetchError} 
                            />
                        : fetchState === SUCCESS ? 
                            generateSearchResults(
                                suggestions, 
                                request
                            )
                        : null
                    }
                </ul>
            </div>
        }
    </>
  )
}