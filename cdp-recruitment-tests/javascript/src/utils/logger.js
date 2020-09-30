/**
 * Prettty printing data
 * @param {object} data
 * @returns {object} prettified results
 */
const logData = data => console.log(`Results: ${JSON.stringify(data, null, 2)}`)

module.exports = logData
