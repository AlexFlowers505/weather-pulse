export function getDateNtime(unixTimestamp = Math.floor(Date.now() / 1000), isMonthAnum = true, isMonthFullName = true, isWeekdayFullName = true, ){
    const timestampModifier = 1000
    const timestamp = unixTimestamp
    const months = {
        full: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        short: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    }
    const weekDays = {
        full: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    }
    const date = new Date(timestamp * timestampModifier)

    const year = date.getFullYear()
    const month = isMonthAnum ? `0${date.getMonth()}`.substr(-2) : months.full[date.getMonth()]
    const day = `0${date.getDate()}`.substr(-2)
    const dayOfWeek = weekDays.full[date.getDay()]
    const hours = `0${date.getHours()}`.substr(-2)
    const minutes = `0${date.getMinutes()}`.substr(-2)
    const seconds = `0${date.getSeconds()}`.substr(-2)

    const formattedTime = `${hours}:${minutes}:${seconds}`
    const formattedDate = `${day}/${month}/${year}`
    const formattedFullDate = `${formattedDate} ${formattedTime}`

    return formattedFullDate 
}

getDateNtime()