import React from 'react'

const className = {
  searchBlock: `
    relative
    w-full
    h-full
  `,
  searchBar: `
    p-baseXS
    w-full
    h-full
    text-text
    bg-bgPrimary
    rounded-base
    hover:bg-hoverState
    active:bg-activeState
    border-solid
    border-2
    border-transparent
    outline-none
    focus:border-primary
    focus:bg-bgPrimary
    transition-colors
    ease-in-out
    duration-200
  `
}
const searchBarAttrs = {
  placeHolder: 'Начните вводить название города'
}

const { searchBlock, searchBar } = className

export default function Search(styles='') {
  return (
    <div className={`search-block ${searchBlock} ${styles}`}>
      <input 
        className={`search-bar ${searchBar}`} 
        type="text" 
        placeholder={searchBarAttrs.placeHolder} />
    </div>
  )
}
