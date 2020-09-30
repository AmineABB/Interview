const counterHandler = require('../../../src/modules/counterHandler')

describe('Count child handler', () => {
	it('should count all child elements and add it to the name property', () => {
		const countries = [
			{
				name: 'Konoha',
				people: [
					{
						name: 'Uchiha',
						animals: [{ name: 'Bison' }, { name: 'Eland' }, { name: 'Cobra' }]
					},
					{
						name: 'Mizu no Kuni',
						animals: [{ name: 'Eland' }]
					}
				]
			}
		]

		const expected = [
			{
				name: 'Konoha [2]',
				people: [
					{
						name: 'Uchiha [3]',
						animals: [{ name: 'Bison' }, { name: 'Eland' }, { name: 'Cobra' }]
					},
					{
						name: 'Mizu no Kuni [1]',
						animals: [{ name: 'Eland' }]
					}
				]
			}
		]

		const results = counterHandler({ countries })
		expect(results).toEqual(expected)
	})
})
