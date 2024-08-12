import LoaderSkeleton from './LoaderSkeleton'
import { getRandomNum } from '../../utils/utils'
import { loaderSkeletonBlockStyle as tw } from '../../styles/components/LoaderSkeletonBlock.style.tsx'


export default function LoaderSkeletonBlock({qnt=2}) {
  return (
    <div className={`skeleton-block ${tw.wrapper}`}>
      { Array.from({ length: qnt }, (_, i) => (<LoaderSkeleton width={getRandomNum(10, 90)} key={i} />)) }
    </div>
  )
    
}
