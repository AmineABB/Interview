import React from 'react'
import { render, screen } from '@testing-library/react'

import { CallLog } from 'src/components'
import { mapCallLogs } from 'src/models'
import mockCallLogs from 'src/mocks'

const callLogs = mapCallLogs(mockCallLogs)

describe('CallLog', () => {
	it('should render the component with the correct info', () => {
		const data = callLogs[0]
		render(<CallLog info={data} />)

		expect(screen.getByText('+33278789090')).toBeInTheDocument()
		expect(screen.getByText('Mobile')).toBeInTheDocument()
		expect(screen.getByText('01:20')).toBeInTheDocument()
	})
})
