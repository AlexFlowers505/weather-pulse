import React from 'react'

const imgAttrs = {
    altText: 'Weather Pulse',
    src: '/assets/images/logos/weather-pulse-logo.png'
}

export default function LogoMin({styles=false}) {
  return <img className={`box-content ${styles}`} src={imgAttrs.src} alt={imgAttrs.altText} />
}
