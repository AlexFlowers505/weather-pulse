import React from 'react'

export default function SpriteSvg({id}) {
  return (
    <svg className='w-full h-full'><use href={`#${id}`} /></svg>
  )
}
