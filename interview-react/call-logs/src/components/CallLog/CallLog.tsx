import { ReactElement } from 'react'

import { BaseCallInfo } from 'src/types'
import styles from './CallLog.module.css'

/**
 * Call log info
 */
function CallLog({ info }: { info: BaseCallInfo }): ReactElement {
	return (
		<div className={styles.callLog}>
			<div className={styles.callLogLeftColumn}>
				<div className={styles.avatar}>
					<span>Call avatar</span>
				</div>
				<div className={styles.content}>
					<span className={styles.phoneNumber}>{info.phoneNumber}</span>
					<span className={styles.phoneType}>{info.phoneType}</span>
				</div>
			</div>
			<div className={styles.callLogRighttColumn}>
				<span>{info.time}</span>
			</div>
		</div>
	)
}

export default CallLog
