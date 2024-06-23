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
    bg-bgPrimary
    rounded-base
  `
}
const searchBarAttrs = {
  placeHolder: 'Начните вводить название города'
}

const { searchBlock, searchBar } = className

export default function Search() {
  return (
    <div className={`search-block ${searchBlock}`}>
      <input 
        className={`search-bar ${searchBar}`} 
        type="text" 
        placeholder={searchBarAttrs.placeHolder} />
    </div>
  )
}
