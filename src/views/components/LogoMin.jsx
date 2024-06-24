import React from 'react'

const imgAttrs = {
    altText: 'Weather Pulse',
    src: '/assets/images/logos/weather-pulse-logo.png'
}
const className = "w-14 p-baseSM pb-2 box-content"

export default function LogoMin() {
  return <img className={className} src={imgAttrs.src} alt={imgAttrs.altText} />
}
