export type CallLogs = {
	phoneNumber: string
	date: string
	id: string
	phoneType: string
}

export type BaseCallInfo = {
	id?: string
	phoneNumber?: string
	phoneType?: string
	time?: string
	callDay?: string
}

export type CallGroup = {
	callDay?: string
	calledNumbers?: BaseCallInfo[]
}

export type CallHistoryGroup = BaseCallInfo & CallGroup
