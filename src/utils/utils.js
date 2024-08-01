import searchResultsStates from "../constants/searchResultsStates"
import locationAccessStates from "../constants/locationAccessStates"
const { IDLE } = searchResultsStates


export function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

export function getRandomNum(min=0, max=100) {
    const randomNum = Math.floor(Math.random() * (max - min) + min)
    return randomNum
}

export function removeMultipleSpaces(str) {
    return str.replace(/\s\s+/g, ' ')
}

export function debounce(fn, delay) {
    let timeoutId
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout( () => fn.apply(this, args), delay)
    }
}

export function handleClearSearchBtnClick(inputRef=null, setFetchState=null, setRepeatFeatch=null, setRequest=null, request=null) {
    setRequest('')
    setFetchState(IDLE)
    inputRef.current.focus()
}

export function handleRepeatSearchBtnClick(inputRef=null, setFetchState=null, setRepeatFeatch=null, setRequest=null, request=null) {
    setRepeatFeatch( prev => !prev )
    inputRef.current.focus()
}

export function setLocationAccessState(setStatus) {
    setStatus(locationAccessStates.PROMPT)
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function refreshPage() {
    window.location.reload()
}
