import { months } from '../constants/months'
import { weekDays } from '../constants/weekDays'

type DateOptions = {
	isNumBased?: boolean
	isFullName?: boolean
	separator?: string
}

export class DateFormatter {
	public date: Date

	constructor(unixTimestamp: number = Math.floor(Date.now() / 1000)) {
		const timestampModifier = 1000
		this.date = new Date(unixTimestamp * timestampModifier)
	}

	getYear(isYearFullNum: boolean = false): number | string {
		const year = this.date.getFullYear()
		if (isYearFullNum) {
			return year
		} else {
			return year.toString().substr(-2)
		}
	}

	getMonth(shortText: boolean = false, options: DateOptions = { isNumBased: false, isFullName: true }): string | number {
		const monthIndex = this.date.getMonth()
		if (options.isNumBased) {
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
	getHoursAndMinutes(): string {
		return `${this.getHours()}:${this.getMinutes()}`
	}

	getFormattedDate(options: DateOptions = { isNumBased: false, isFullName: true, separator: '/' }): string {
		const day = this.getDay()
		const month = this.getMonth(options.isFullName ? false : true, options)
		const year = this.getYear()
		const separator = options.separator || '/'
		return `${day}${separator}${month}${separator}${year}`
	}

	getFormattedTime(): string {
		const hours = this.getHours()
		const minutes = this.getMinutes()
		const seconds = this.getSeconds()
		return `${hours}:${minutes}:${seconds}`
	}

	getFormattedFullDate(options: DateOptions = { isNumBased: false, isFullName: true }): string {
		const formattedDate = this.getFormattedDate(options)
		const formattedTime = this.getFormattedTime()
		return `${formattedDate} ${formattedTime}`
	}
}