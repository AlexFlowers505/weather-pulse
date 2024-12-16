import React from "react"
import { TwStylesObject } from "../../types/overalls/overalls"

const imgAttrs = {
    altText: 'Weather Pulse',
    src: '/assets/images/logos/weather-pulse-logo.png'
}

type logoMinPropsType = {
  styles: string
}

export default function LogoMin({styles=''}: logoMinPropsType): React.JSX.Element {
  return <img className={`box-content ${styles}`} src={imgAttrs.src} alt={imgAttrs.altText} />
}
