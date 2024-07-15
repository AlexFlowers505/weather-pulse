import React from 'react'

export default function SpriteSvg({id, extraSVGstyle}) {
  return (
    <svg className='w-7 h-7' style={extraSVGstyle}><use href={`#${id}`} /></svg>
  )
}
