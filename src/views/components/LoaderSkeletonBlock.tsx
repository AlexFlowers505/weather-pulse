import React from 'react'
import LoaderSkeleton from './LoaderSkeleton.tsx'
import { getRandomNum } from '../../utils/utils.tsx'
import { loaderSkeletonBlockStyle as tw } from '../../styles/components/LoaderSkeletonBlock.style.tsx'

type loaderSkeletonBlockPropsType = {
  qnt: number
}
export default function LoaderSkeletonBlock({qnt=2}: loaderSkeletonBlockPropsType): React.JSX.Element {
  return (
    <div className={`skeleton-block ${tw.wrapper}`}>
      { Array.from({ length: qnt }, (_: any, i: number): React.JSX.Element => (<LoaderSkeleton width={getRandomNum(10, 90)} key={i} />)) }
    </div>
  )
    
}
