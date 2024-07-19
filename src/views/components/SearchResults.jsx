import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'
import searchResultsStates from "../../constants/searchResultsStates"
import Btn from './Btn'
import btnStyles from '../styles/btnStyles'
import btnContentTypes from '../../constants/btnContentTypes'

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

export default function SearchResults({fetchState, suggestions=[], request=''}) {      
    
    return (
    <>
        { 
            fetchState === IDLE ? null :
            <div className={`search-results container-visuals--custom-p ${container}`}>
                <ul className={`search-results-list ${list}`}>
                    {fetchState === LOADING ? generateLoaderSkeletons(loaderSkeletonProps.blocksQnt, loaderSkeletonProps.skeletonsPerBlock)
                    : fetchState === NO_RESULTS ? 
                    <>
                        <span>¯\_(ツ)_/¯</span>
                        <span>Ничего не найдено</span>
                        <span>Попробуйте изменить запрос</span>
                        <Btn 
                            btnSize={btnStyles.size.md}
                            btnStyle={btnStyles.style.outlined}
                            contentType={btnContentTypes.text}
                            content='Очистить поле поиска'
                            onClick={console.log('clear input and focus there')}
                        />
                    </>
                    : fetchState === ERROR ? null
                    : fetchState === SUCCESS ?
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