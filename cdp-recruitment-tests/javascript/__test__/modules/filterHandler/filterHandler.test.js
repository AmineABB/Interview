const filterHandler = require('../../../src/modules/filterHandler')

describe('Filter animals handler', () => {
	it('should only filter animals that match the pattern and remove the one that does not match the pattern', () => {
		const pattern = 'Co'
		const countries = [
			{
				name: 'Konoha',
				people: [
					{
						name: 'Uchiha',
						animals: [{ name: 'Bison' }, { name: 'Eland' }, { name: 'Cobra' }, { name: 'Dolphin' }]
					}
				]
			}
		]
		const expected = [
			{
				name: 'Konoha',
				people: [
					{
						name: 'Uchiha',
						animals: [{ name: `${pattern}bra` }]
					}
				]
			}
		]
		const results = filterHandler({ pattern, countries })
		expect(results).toEqual(expected)
	})
	it('should filter all animals name of each country and person', () => {
		const pattern = 'Elk'
		const countries = [
			{
				name: 'Konoha',
				people: [
					{
						name: 'Uchiha',
						animals: [{ name: `Bison ${pattern}` }, { name: 'Eland' }, { name: 'Cobra' }]
					},
					{
						name: 'Mizu no Kuni',
						animals: [{ name: 'Eland' }, { name: `${pattern} Cobra` }]
					}
				]
			},
			{
				name: 'Kumo',
				people: [
					{
						name: 'Hinata',
						animals: [{ name: `${pattern} kyubi` }, { name: 'not kyubi' }]
					}
				]
			}
		]
		const expected = [
			{
				name: 'Konoha',
				people: [
					{
						name: 'Uchiha',
						animals: [{ name: `Bison ${pattern}` }]
					},
					{
						name: 'Mizu no Kuni',
						animals: [{ name: `${pattern} Cobra` }]
					}
				]
			},
			{
				name: 'Kumo',
				people: [
					{
						name: 'Hinata',
						animals: [{ name: `${pattern} kyubi` }]
					}
				]
			}
		]
		const result = filterHandler({ pattern, countries })
		expect(result).toEqual(expected)
	})
	it('should return the original data if no pattern match', () => {
		const countries = [
			{
				name: 'Japan',
				people: [
					{
						name: 'Danzo',
						animals: [
							{ name: 'aidi' },
							{ name: 'airedale' },
							{ name: 'airedaleterrier' },
							{ name: 'akitainu' },
							{ name: 'alabamamapturtle' },
							{ name: 'alaskajingle' },
							{ name: 'alaskanhusky' },
							{ name: 'alaskankleekai' },
							{ name: 'alaskanmalamute' },
							{ name: 'albacoretuna' },
							{ name: 'albatross' },
							{ name: 'albertosaurus' }
						]
					}
				]
			}
		]
		const pattern = ''
		const results = filterHandler({ pattern, countries })
		expect(results).toEqual(results)
	})
})
