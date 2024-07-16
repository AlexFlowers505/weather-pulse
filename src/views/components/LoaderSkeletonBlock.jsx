import LoaderSkeleton from './LoaderSkeleton'
import { getRandomNum } from '../../utils/utils'

const twStyles = {
    wrapper: `
        flex 
        flex-col 
        justify-start 
        items-start 
        my-1
        gap- 0.5
    `,
}

const { wrapper } = twStyles

export default function LoaderSkeletonBlock({qnt=2}) {
  return (
    <div className={`skeleton-block ${wrapper}`}>
      { Array.from({ length: qnt }, (_, i) => (<LoaderSkeleton width={getRandomNum(10, 90)} key={i} />)) }
    </div>
  )
    
}
