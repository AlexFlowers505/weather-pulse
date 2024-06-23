import React from 'react'
import img from '../../assets/images/logos/weather-pulse-logo.png'

const imgAttrs = {
    altText: 'Weather Pulse',
}
const className = "w-14"

export default function LogoMin() {
  return <img className={className} src={img} alt={imgAttrs.altText} />
}
