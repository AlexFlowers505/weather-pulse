import { months } from '../constants/months'
import { weekDays } from '../constants/weekDays'

type DateOptions = {
	isMonthAnum?: boolean
	isMonthFullName?: boolean
	isWeekdayFullName?: boolean
}

export class DateFormatter {
	public date: Date

	constructor(unixTimestamp: number = Math.floor(Date.now() / 1000)) {
		const timestampModifier = 1000
		this.date = new Date(unixTimestamp * timestampModifier)
	}

	getYear(): number {
		return this.date.getFullYear()
	}

	getMonth(shortText: boolean = false, options: DateOptions = { isMonthAnum: false, isMonthFullName: true }): string | number {
		const monthIndex = this.date.getMonth()
		if (options.isMonthAnum) {
			return monthIndex + 1
		} else {
			return shortText ? months[monthIndex].short : months[monthIndex].full
		}
	}

	getDay(): string {
		return `0${this.date.getDate()}`.substr(-2)
	}

	getDayOfWeek(shortText: boolean = false): string {
		const dayIndex = this.date.getDay()
		return shortText ? weekDays[dayIndex].short : weekDays[dayIndex].full
	}

	getHours(): string {
		return `0${this.date.getHours()}`.substr(-2)
	}

	getMinutes(): string {
		return `0${this.date.getMinutes()}`.substr(-2)
	}

	getSeconds(): string {
		return `0${this.date.getSeconds()}`.substr(-2)
	}

	getFormattedDate(options: DateOptions = { isMonthAnum: false, isMonthFullName: true }): string {
		const day = this.getDay()
		const month = this.getMonth(options.isMonthFullName ? false : true, options)
		const year = this.getYear()
		return `${day}/${month}/${year}`
	}

	getFormattedTime(): string {
		const hours = this.getHours()
		const minutes = this.getMinutes()
		const seconds = this.getSeconds()
		return `${hours}:${minutes}:${seconds}`
	}

	getFormattedFullDate(options: DateOptions = { isMonthAnum: false, isMonthFullName: true, isWeekdayFullName: true }): string {
		const formattedDate = this.getFormattedDate(options)
		const formattedTime = this.getFormattedTime()
		return `${formattedDate} ${formattedTime}`
	}
}

const dateFormatter = new DateFormatter()

console.log(dateFormatter.getYear())
console.log(dateFormatter.getMonth(true))
console.log(dateFormatter.getDayOfWeek(false))
console.log(dateFormatter.getFormattedFullDate())