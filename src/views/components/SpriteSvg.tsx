import React from 'react'
import { spriteSvgStyle as tw } from '../../styles/components/SpriteSvg.style'

type TSpriteSvg = {
  id: string
  baseStyle?: string
  extraSVGstyle?: React.CSSProperties
  extraSVGClass?: string
}

const SpriteSvg: React.FC<TSpriteSvg>  = ({id, extraSVGstyle, baseStyle, extraSVGClass=``}) => {
  return (
    <svg 
      className={`${tw.icon} ${baseStyle} ${extraSVGClass}`} 
      style={extraSVGstyle}>
      <use href={`#${id}`} />
    </svg>
  )
}

export default SpriteSvg
