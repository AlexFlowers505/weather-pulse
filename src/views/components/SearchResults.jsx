import React from 'react'
import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates.ts"
import InfoMessage from './InfoMessage'
import { searchMessages } from '../../data/infoMessagesData.tsx'
import { SearchResultsStyle as tw, SearchResultStyleArbitrary as customStyles } from '../../styles/components/SearchResults.style'

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

const loaderSkeletonProps = {
    blocksQnt: 5,
    skeletonsPerBlock: 2
}

const generateSearchResults = (suggestions, request) => {
    return (<>{
        suggestions.map( (sugg, i, arr) => {
            const { area, region, country, forecast } = sugg
            const { main: {temp} } = forecast
            const locNameMatch = request
            return (<React.Fragment key={i}>
                <SearchResult 
                    locNameMatch={locNameMatch}
                    locRegion={region}
                    locCountry={country}
                    locName={area}
                    locTemp={Math.round(temp)}
                    locTempIcon={forecast.weather[0].icon}
                    request={request}
                />
                { arr.length-1 > i ? <hr className={`${tw.horLine}`}/> : null }
            </React.Fragment>)
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
    }) { 
        return (<> { 
            fetchState === IDLE ? null :
            <div className={`search-results ${tw.container}`}>
                <ul 
                    className={`search-results-list ${tw.list}`} 
                    style={{...customStyles.list}}
                    tabIndex={-1}    
                >
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
    } </>)
}