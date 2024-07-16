const twStyles = {
    skeleton: `
        h-4
        bg-text/15
        rounded-sm
        mx-2
        my-1
        animate-pulse-base
    `
}

const { skeleton } = twStyles

export default function LoaderSkeleton({width}) {
  return (
    <div className={`skeleton ${skeleton}`} style={{width: `${width}%`}}></div>
  )
}
