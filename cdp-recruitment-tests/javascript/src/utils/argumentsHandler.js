const FLAGS = {
	'--filter': 'filter',
	'--count': 'count'
}

/**
 * CLI usage
 * @returns {string} usage informations
 */
function printHelp() {
	console.log('')
	console.log('Usage :')
	console.log('')
	console.log('--filter={PATTERN}          filter to search with {PATTERN}')
	console.log('--count                     count the number of children')
	console.log('')
	console.log('')
}

/**
 * Return the flag with the pattern to search with
 * @param {string} option
 * @returns {{flag: string, pattern: string}=}
 */
function getOptionType(option) {
	if (!option || option.length > 1) {
		return
	}

	const flagOperation = option.find(prop => Object.keys(FLAGS).includes(prop.split('=')[0]))
	const [flag, pattern] = flagOperation ? flagOperation.split('=') : []

	return {
		flag: FLAGS[flag],
		pattern
	}
}

/**
 * Helper that pars arguments passed to the CLI
 * @param {Array.<string>} args
 * @returns {{flag: string, pattern: string}=} option to apply
 */
function argumentsHandler(args) {
	if (!args || !args.length) {
		console.error('Please provide argument.')
		printHelp()
		return
	}

	const option = getOptionType(args)

	if (!option) {
		console.error('The argument is not recognized.')
		return
	}

	const { flag = '', pattern = '' } = option

	if (flag === 'filter' && !pattern) {
		console.error('Please provide the search pattern for the [--filter] flag.')
		return
	}

	return {
		flag,
		pattern
	}
}

module.exports = argumentsHandler
