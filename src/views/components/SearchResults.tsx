import React from 'react'
import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"
import InfoMessage from './InfoMessage'
import { searchMessages } from '../../data/infoMessagesData'
import { SearchResultsStyle as tw, SearchResultStyleArbitrary as customStyles } from '../../styles/components/SearchResults.style'
import { setStateType } from '../../types/overalls/overalls'

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

const loaderSkeletonProps = {
    blocksQnt: 5,
    skeletonsPerBlock: 2
}

const generateSearchResults = (suggestions: any[], request: string): React.JSX.Element => {
    return (<>{
        suggestions.map( (sugg, i, arr) => {
            const { area, region, country, forecast, lat, lon, id } = sugg
            const { main: {temp} } = forecast
            return (<React.Fragment key={i}>
                <SearchResult 
                    locRegion={region}
                    locCountry={country}
                    locName={area}
                    lat={lat}
                    lon={lon}
                    id={id}
                    locTemp={Math.round(temp)}
                    locTempIcon={forecast.weather[0].icon}
                    request={request}
                />
                { arr.length-1 > i ? <hr className={`${tw.horLine}`}/> : null }
            </React.Fragment>)
        })
    }</>)
}

type searchResultsPropsType = {
    fetchState: searchResultsStates | null
    suggestions: any[]
    request: string
    inputRef: React.RefObject<HTMLInputElement>
    setFetchState: setStateType<searchResultsStates> | null
    setRequest: setStateType<string> | null
    setRepeatFetch: setStateType<boolean> | null
}
export default function SearchResults(
    {
        fetchState, 
        suggestions=[], 
        request='', 
        inputRef, 
        setFetchState, 
        setRequest, 
        setRepeatFetch 
    }: searchResultsPropsType): React.JSX.Element { 
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