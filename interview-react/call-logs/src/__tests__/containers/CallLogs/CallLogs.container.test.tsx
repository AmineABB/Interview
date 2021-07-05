import React from 'react'
import { render, screen } from '@testing-library/react'

import { CallLogs } from 'src/containers'
import { mapCallLogs } from 'src/models'

import mockCallLogs from 'src/mocks'

const callLogs = mapCallLogs(mockCallLogs)

describe('CallLogs', () => {
	it('should find title for a single call', () => {
		render(<CallLogs data={callLogs} />)

		expect(screen.getByText('February 28')).toBeInTheDocument()
	})

	it('should find title for a multiple call', () => {
		render(<CallLogs data={callLogs} />)

		expect(screen.getByText('April 6')).toBeInTheDocument()
	})
})
