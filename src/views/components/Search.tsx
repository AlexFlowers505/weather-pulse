import React, { useState, useEffect, useRef } from "react"
import btnStyles from '../../styles/components/btn.style'
import DismissBtn from './btns/DismissBtn'
import SearchResults from './SearchResults'
import { handleClearSearchBtnClick } from "../../utils/utils"
import { searchStyle as tw } from "../../styles/components/Search.style"
import ChangeUnitsBtn from "./btns/ChangeUnitsBtn"
import useFetchSuggestions from "../../hooks/useFetchSuggestions"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/store"
import { switchLocationAccess } from "../../redux/slices/locationAccessSlice"
import states from "../../constants/locationAccessStates"
import { SearchProps } from "../../types/components/search.type"

const searchBarAttrs = {
  placeHolder: 'Начните вводить название населенного пункта',
  dismissBtnTooltipContent: 'Очистить поле поиска',
}

export default function Search({styles='', hasUnitsBtn = true, isSearchFocusOnLoad = false}: SearchProps): React.JSX.Element {
  const [request, setRequest] = useState('')
  const [repeatFetch, setRepeatFetch] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const units = useSelector((state: RootState) => state.temperatureUnits.__type)
  const { fetchState, suggestions, setFetchState } = useFetchSuggestions(request, repeatFetch, units)

  const handleRequestChange = (evt: React.ChangeEvent<HTMLInputElement>)  => {
    setRequest(evt.target.value)
  }

  const handleRequestInputFocus = () => {
    dispatch(switchLocationAccess(states.PROMPT))
  }

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    isSearchFocusOnLoad && inputRef.current?.focus()
  }, [])

  useEffect(() => {
    isSearchFocusOnLoad && inputRef.current?.focus()
  }, [units])

  console.log('request', request)
  return (
    <div className={`search-block ${tw.searchBlock} ${!hasUnitsBtn && tw.searchBlockNoUnits } ${styles}`}>
      <div className={`input-wrapper ${tw.inputWrapper}`}>
        <input
          className={`search-bar ${hasUnitsBtn ? tw.searchBar : tw.searchBarNoUnitsBtn}`}
          ref={inputRef}
          type="text"
          value={request}
          onChange={handleRequestChange}
          onFocus={handleRequestInputFocus}
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
          { hasUnitsBtn &&
            <ChangeUnitsBtn 
              extraBtnClass={tw.unitsBtn}
              btnStyle={btnStyles.style.contentOnly}
              btnSize={btnStyles.size.md}
            />
          }
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