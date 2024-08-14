import React, { useState, useEffect, useRef } from "react"
import btnStyles from '../../styles/components/btn.style'
import DismissBtn from './btns/DismissBtn'
import SearchResults from './SearchResults'
import { handleClearSearchBtnClick } from "../../utils/utils"
import { searchStyle as tw } from "../../styles/components/Search.style"
import ChangeUnitsBtn from "./btns/ChangeUnitsBtn"
import useFetchSuggestions from "../../hooks/useFetchSuggestions"

const searchBarAttrs = {
  placeHolder: 'Начните вводить название населенного пункта',
  dismissBtnTooltipContent: 'Очистить поле поиска',
}

type searchPropsType = {
  styles?: string
}

export default function Search({styles=''}: searchPropsType): React.JSX.Element {
  const [request, setRequest] = useState('')
  const [repeatFetch, setRepeatFetch] = useState(false)
  const inputRef = useRef(null)
  const { fetchState, suggestions, setFetchState } = useFetchSuggestions(request, repeatFetch)

  const handleRequestChange = evt => {
    setRequest(evt.target.value)
  }

  useEffect(() => inputRef.current.focus(), [])

  console.log('request', request)
  return (
    <div className={`search-block ${tw.searchBlock} ${styles}`}>
      <div className={`input-wrapper ${tw.inputWrapper}`}>
        <input
          className={`search-bar ${tw.searchBar}`}
          ref={inputRef}
          type="text"
          value={request}
          onChange={handleRequestChange}
          placeholder={searchBarAttrs.placeHolder}
        />
        <div className={`btn-wrapper ${tw.btnWrapper}`}>
          {!!request.length && (
            <DismissBtn
              extraBtnClass={tw.DismissBtn}
              hasTooltip={true}
              tooltipContent={searchBarAttrs.dismissBtnTooltipContent}
              btnSize={btnStyles.size.md}
              btnStyle={btnStyles.style.contentOnly}
              onClick={() => handleClearSearchBtnClick(inputRef, setFetchState, null, setRequest)}
            />
          )}
          <ChangeUnitsBtn 
            extraBtnClass={tw.unitsBtn}
            btnStyle={btnStyles.style.contentOnly}
            btnSize={btnStyles.size.md}
            onClick={() => handleClearSearchBtnClick(inputRef, setFetchState, null, setRequest)}          
          />
        </div>
      </div>
      <SearchResults
        suggestions={suggestions}
        fetchState={fetchState}
        request={request}
        inputRef={inputRef}
        setRequest={setRequest}
        setFetchState={setFetchState}
        setRepeatFetch={setRepeatFetch}
      />
    </div>
  )
}