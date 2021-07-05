import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { v4 as uuidv4 } from 'uuid'

dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(customParseFormat)

/**
 * Get uniq id
 */
export const getUniqId = (): string => uuidv4()

/**
 * Get formatted date
 */
export function getFormattedDate({
	date,
	format = 'YYYY-MM-DD',
	startOfDay = true,
}: {
	date: string
	format?: string
	startOfDay?: boolean
}): string {
	if (startOfDay) {
		return dayjs(date).startOf('day').format(format)
	}
	return dayjs(date).format(format)
}

/**
 * Check if date is before or after aother date
 */
export function isPrevOrNextDate(prevDate: string, nextDate: string): boolean {
	return dayjs(nextDate, 'YYYY-MM-DD').isBefore(dayjs(prevDate, 'YYYY-MM-DD').toDate())
}

/**
 * Get day label
 */
export function getDayLabel(date: string): string {
	const isCallMadeToday = dayjs(date).isToday() && 'Today'
	const isCallMadeYesterday = dayjs(date).isYesterday() && 'Yesterday'
	const monthAndDayCall = getFormattedDate({ date, format: 'MMMM D' })
	return isCallMadeToday || isCallMadeYesterday || monthAndDayCall
}
