import { CallLogs, BaseCallInfo, CallHistoryGroup } from 'src/types'
import { getUniqId, getFormattedDate, getDayLabel, isPrevOrNextDate } from 'src/utils'

/**
 * Group dates by day
 */
function groupDateDyDay(callList: CallLogs[]) {
	return callList.reduce((prevDate, currentDate) => {
		const dateDay = getFormattedDate({ date: currentDate.date })

		if (!prevDate[dateDay]) {
			prevDate[dateDay] = []
		}

		prevDate[dateDay].push(currentDate)
		return prevDate
	}, {} as Record<string, CallLogs[]>)
}

/**
 * Formate call infos
 */
function formatCallInfo({
	info,
	hasOnlyOneCall = true,
}: {
	info: CallLogs
	hasOnlyOneCall?: boolean
}): BaseCallInfo {
	const { date, phoneNumber, phoneType } = info
	const time = getFormattedDate({ date, format: 'HH:mm', startOfDay: false })
	const callDay = getDayLabel(date)
	const id = getUniqId() // prevent using the same object key defined inside the model

	return {
		id,
		phoneNumber: `+${phoneNumber}`,
		phoneType,
		time,
		...(hasOnlyOneCall && { callDay }),
	}
}

/**
 * Sort calls by day
 */
const sortCallGroup = (prevDate: string, nextDate: string) =>
	isPrevOrNextDate(prevDate, nextDate) ? 1 : -1

/**
 * Get call group keys helper
 */
const getCallGroupKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof T>

/**
 * Map call log infos to display
 */
export function mapCallLogs(payload: CallLogs[]): CallHistoryGroup[] {
	const callGroups = groupDateDyDay(payload)
	const groupKeys = getCallGroupKeys(callGroups).sort(sortCallGroup)

	return groupKeys.map((key) => {
		const groupProps = callGroups[key]
		const hasOnlyOneCall = groupProps.length === 1

		if (hasOnlyOneCall) {
			const [callInfo] = groupProps
			return formatCallInfo({ info: callInfo })
		}

		const [{ date }] = groupProps
		const callDay = getDayLabel(date)
		const groups = groupProps.map((info: CallLogs) =>
			formatCallInfo({ info, hasOnlyOneCall: false })
		)

		return {
			callDay,
			calledNumbers: groups,
		}
	})
}
