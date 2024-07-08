import ClipLoader from "react-spinners/ClipLoader"
import React, { useState, CSSProperties } from "react"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

export default function Spinner({loading}) {
    let [loading, setLoading] = useState(true)
    let [color, setColor] = useState("#ffffff")

  return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />  )
}