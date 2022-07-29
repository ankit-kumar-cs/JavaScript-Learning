import { thousandsSeparators } from "./program";
describe('chapter-8 thousandsSeparators', () => {
	it(`should return the string separated by thousand without decimals`, () => {
		// GIVEN
		const text = [10001, 1000000, 100, 0, 1, 1001, 1111];
		const expectedResponse = ['10,001', '1,000,000', '100', '0', '1', '1,001', '1,111'];

		// WHEN
		const transformedStringList = text.map(number => thousandsSeparators(number));

		// THEN
		expect(transformedStringList).toEqual(expectedResponse);
	});

	it(`should return the string separated by thousand with decimals`, () => {
		// GIVEN
		const text = [10001.100, 1000000.1, 100.11, 0.1, 1.1, 1001.12, 1111.10];
		const expectedResponse = ['10,001.1', '1,000,000.1', '100.11', '0.1', '1.1', '1,001.12', '1,111.1'];

		// WHEN
		const transformedStringList = text.map(number => thousandsSeparators(number));

		// THEN
		expect(transformedStringList).toEqual(expectedResponse);
	});
})