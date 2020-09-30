const argumentsHandler = require('../../src/utils/argumentsHandler')

describe('Argument handler', () => {
	beforeEach(() => {
		jest.spyOn(console, 'log').mockImplementation()
		jest.spyOn(console, 'error').mockImplementation()
	})

	it('should handle missing argument', () => {
		const results = argumentsHandler()
		expect(results).toBeUndefined()
	})

	it('should return an object with empty properties if the argument is not recognized', () => {
		const results = argumentsHandler(['--foo'])
		const expected = { flag: '', pattern: '' }
		expect(results).toEqual(expected)
	})

	it('should handle case if the argument is correct but without a value', () => {
		const results = argumentsHandler(['--filter'])
		expect(results).toBeUndefined()
	})

	it('should return an object with a flag and a pattern if the flag and value are matched', () => {
		const results = argumentsHandler(['--filter=uch'])
		const expected = { flag: 'filter', pattern: 'uch' }
		expect(results).toEqual(expected)
	})
})
