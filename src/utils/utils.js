import searchResultsStates from "../constants/searchResultsStates"
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

export async function handleGeoLocationBtnClick () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( 
            position => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                console.log(`Latitude: ${lat}, longitude: ${lng}`)
            }, 
            error => console.error("Error getting user location:", error)
        )} else console.error("Geolocation is not supported by this browser.")
}