/**
 * Get fileted animals
 * @param {object} param
 * @param {object} param.pattern
 * @param {object} param.countries
 * @returns {Array.<object>} fileted animals
 */
function getFiletedAnimals({ pattern, countries }) {
	return countries
		.map(({ people, ...rest }) => ({
			...rest,
			people: people
				.map(({ animals, ...rest }) => ({
					...rest,
					animals: animals.filter(({ name }) => name.includes(pattern))
				}))
				.filter(({ animals }) => animals.length > 0)
		}))
		.filter(({ people }) => people.length > 0)
}

module.exports = getFiletedAnimals
