import React from 'react'

export default function SpriteSvg({id, extraStyles}) {
  return (
    <svg className='w-full h-full' style={extraStyles}><use href={`#${id}`} /></svg>
  )
}
