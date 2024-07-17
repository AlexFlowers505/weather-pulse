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