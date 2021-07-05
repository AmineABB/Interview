import { ReactElement } from 'react'
import { mapCallLogs } from './models'
import mockCallLogs from './mocks'

import { CallLogs } from './containers'
import './App.module.css'

function App(): ReactElement {
	const callLogs = mapCallLogs(mockCallLogs)
	return (
		<div className="App">
			<CallLogs data={callLogs} />
		</div>
	)
}

export default App
