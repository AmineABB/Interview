import { ReactElement } from 'react'

import { CallHistoryGroup } from 'src/types'
import { CallLog } from 'src/components'

import styles from './CallLogs.module.css'

/**
 * Call logs container
 */
function CallLogs({ data }: { data: CallHistoryGroup[] }): ReactElement {
	return (
		<ul className={styles.container}>
			{data.map((prop) => {
				if (prop?.calledNumbers) {
					const { callDay, calledNumbers } = prop
					const groupKey = `call-group${prop.id}`
					return (
						<li key={groupKey}>
							<h4 className={styles.title}>{callDay}</h4>
							{calledNumbers.map((info) => (
								<CallLog key={info.id} info={info} />
							))}
						</li>
					)
				}
				return (
					<li key={prop.id}>
						<h4 className={styles.title}>{prop.callDay}</h4>
						<CallLog info={prop} />
					</li>
				)
			})}
		</ul>
	)
}

export default CallLogs
