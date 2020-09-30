const { argumentsHandler, logger } = require('./utils')
const { applyAction, ...actions } = require('./modules')
const { data } = require('../mock/data')

const args = process.argv.slice(2)
const flagInfo = argumentsHandler(args)

/**
 * Main App
 */
const init = (() => {
	if (flagInfo) {
		const { flag, pattern } = flagInfo
		const results = applyAction(actions[flag], pattern, data)

		logger(results)
	}
})()
