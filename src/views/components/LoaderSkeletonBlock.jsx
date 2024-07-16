import React from 'react'
import LoaderSkeleton from './LoaderSkeleton'
import { getRandomItemFromArray } from '../../utils/utils'

const twStyles = {
    wrapper: `
        flex 
        flex-col 
        justify-start 
        items-start 
        my-1
        gap- 0.5
    `,
    skeletonWidths: [
        'w-11/12',
        'w-10/12',
        'w-9/12',
        'w-8/12',
        'w-7/12',
        'w-6/12',
        'w-5/12',
        'w-4/12',
        'w-3/12',
        'w-2/12',
        'w-1/12',
        'w-5/6',
        'w-4/6',
        'w-3/6',
        'w-2/6',
        'w-1/6',
        'w-4/5',
        'w-3/5',
        'w-2/5',
        'w-1/5',
        'w-3/4',
        'w-2/4',
        'w-1/4',
        'w-2/3',
        'w-1/3',
    ]
}

const { wrapper, skeletonWidths } = twStyles

export default function LoaderSkeletonBlock({qnt}) {
  return (
    <div className={`skeleton-block ${wrapper}`}>
        <LoaderSkeleton width={skeletonWidths[getRandomItemFromArray(skeletonWidths)]} />
        <LoaderSkeleton width={skeletonWidths[getRandomItemFromArray(skeletonWidths)]} />
    </div>
  )
}
