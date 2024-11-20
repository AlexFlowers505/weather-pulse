import React from 'react'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"
import InfoMessage from './InfoMessage'
import { searchMessages } from '../../data/infoMessagesData'
import { SearchResultsStyle as tw, SearchResultStyleArbitrary as customStyles } from '../../styles/components/SearchResults.style'
import { setStateType } from '../../types/overalls/overalls'
import { generateSearchResults } from '../../utils/generateSearchResults'
import { searchResultsConfig as config } from '../../config/components/searchResults.config'

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

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
                <ul className={`search-results-list ${tw.list}`} style={{...customStyles.list}} tabIndex={-1}>
                    {
                        fetchState === LOADING ? generateLoaderSkeletons(config.loader.blocksQnt, config.loader.skeletonsPerBlock) : 
                        fetchState === NO_RESULTS ? 
                            <InfoMessage 
                                inputRef={inputRef} 
                                setFetchState={setFetchState} 
                                setRepeatFetch={setRepeatFetch}
                                request={request}
                                setRequest={setRequest} 
                                message={searchMessages.nothingFound} 
                            /> : 
                        fetchState === ERROR ? 
                            <InfoMessage 
                                inputRef={inputRef} 
                                setFetchState={setFetchState} 
                                setRepeatFetch={setRepeatFetch}
                                setRequest={setRequest} 
                                request={request}
                                message={searchMessages.fetchError} 
                            /> : 
                        fetchState === SUCCESS ? generateSearchResults(suggestions, request) : 
                        null
                    }
                </ul>
            </div>
    } </>)
}