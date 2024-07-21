import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"
import InfoMessage from './InfoMessage'
import { searchMessages } from '../../data/infoMessagesData'

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

const generateSearchResults = (suggestions, request) => {
    return (<>{
        suggestions.map( (sugg, i, arr) => {
            const { city, region, forecast } = sugg
            const locaNameMatch = request
            return (<>
                <SearchResult 
                    key={i}
                    locNameMatch={locaNameMatch}
                    locRegion={region}
                    locName={city}
                    locTemp={Math.round(forecast.main.temp)}
                    request={request}
                />
                { arr.length-1 > i ? <hr className={`border-lineColor mx-2`}/> : null }
            </>)
        })
    }</>)
}

export default function SearchResults(
    {
        fetchState, 
        suggestions=[], 
        request='', 
        inputRef=null, 
        setFetchState=null, 
        setRequest=null, 
        setRepeatFetch=null 
    }) 
    { return (
    <>
        { 
            fetchState === IDLE ? null :
            <div className={`search-results container-visuals--custom-p ${container}`}>
                <ul className={`search-results-list ${list}`}>
                    {
                        fetchState === LOADING ? 
                            generateLoaderSkeletons(loaderSkeletonProps.blocksQnt, loaderSkeletonProps.skeletonsPerBlock)
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
                            generateSearchResults(suggestions, request)
                        : null
                    }
                </ul>
            </div>
        }
    </>
  )
}