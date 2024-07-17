import SearchResult from './SearchResult'
import generateLoaderSkeletons from '../../utils/generateLoaderSkeletons'

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
const { container, list } = twStyles

const loaderSkeletonProps = {
    blocksQnt: 5,
    skeletonsPerBlock: 2
}

export default function SearchResults({loading, suggestions=[]}) {
  return (
    <div className={`search-results container-visuals--custom-p px-3 py-3 ${container}`}>
        <ul className={`search-results-list ${twStyles.list}`}>
            {loading ? 
                    generateLoaderSkeletons(loaderSkeletonProps.blocksQnt, loaderSkeletonProps.skeletonsPerBlock) 
            : !!suggestions.length ?
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
  )
}