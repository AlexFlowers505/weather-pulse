import React from "react"
import HashLoader from "react-spinners/HashLoader"

type spinnerPropsType = {
  loading: boolean
}
export default function Spinner({loading}: spinnerPropsType): React.JSX.Element {
  return (
    <HashLoader
      color="#0095FF"
      cssOverride={{
        borderColor: 'transparent',
        position: 'absolute',
        top: '25%'
      }}
      loading={loading}
      size={150}
      speedMultiplier={1}
    />
  )
}