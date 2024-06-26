import React from 'react'

export default function SpriteSvg({id, extraSVGstyle}) {
  return (
    <svg className='w-full h-full' style={extraSVGstyle}><use href={`#${id}`} /></svg>
  )
}
