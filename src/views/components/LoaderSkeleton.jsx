import { loaderSkeletonStyle as tw } from "../../styles/components/LoaderSkeleton.style"

export default function LoaderSkeleton({width}) {
  return (
    <div className={`skeleton ${tw.skeleton}`} style={{width: `${width}%`}}></div>
  )
}
