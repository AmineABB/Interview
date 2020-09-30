/**
 * Count the number of child nodes
 * @param {object} param
 * @param {object} param.countries
 * @returns {Array.<object>} count of people and animals
 */
function countChildNodes({ countries }) {
	return countries.map(({ name, people, ...rest }) => ({
		...rest,
		name: `${name} [${people.length}]`,
		people: people.map(({ name, animals, ...rest }) => ({
			...rest,
			name: `${name} [${animals.length}]`,
			animals
		}))
	}))
}

module.exports = countChildNodes
