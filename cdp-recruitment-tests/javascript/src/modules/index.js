const filterHandler = require('./filterHandler')
const counterHandler = require('./counterHandler')

/**
 * Action handler [filter or count]
 * @param {function} action
 * @param {string=} pattern
 * @param {object} data
 * @returns {object} results
 */
const applyAction = (action, pattern, data) =>
	[action].reduce((countries, cb) => cb({ pattern, countries }), data)

module.exports = {
	filter: filterHandler,
	count: counterHandler,
	applyAction
}
