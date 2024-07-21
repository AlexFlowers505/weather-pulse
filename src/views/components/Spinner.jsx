import HashLoader from "react-spinners/HashLoader"

export default function Spinner({loading}) {
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