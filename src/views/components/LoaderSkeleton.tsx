import React from "react"
import { loaderSkeletonStyle as tw } from "../../styles/components/LoaderSkeleton.style"


type loaderSkeletonPropsType = {
  width: number
}
export default function LoaderSkeleton({width}: loaderSkeletonPropsType): React.JSX.Element {
  return (
    <div className={`skeleton ${tw.skeleton}`} style={{width: `${width}%`}}></div>
  )
}
