import { textTruncate } from "./program";
describe('chapter-7 textTruncate', () => {
	it(`should return the original string when no arguments supplied except the string`, () => {
		// GIVEN
		const text = 'We are doing JS string exercises.';

		// WHEN
		const transformedString = textTruncate(text);

		// THEN
		expect(transformedString).toEqual(text);
	});

	it(`should return the transformed string when no ending string is supplied`, () => {
		// GIVEN
		const text = 'We are doing JS string exercises.';

		// WHEN
		const transformedString = textTruncate(text, 19);

		// THEN
		expect(transformedString).toEqual('We are doing JS ...');
	});

	it(`should return the transformed string when custom ending string is supplied`, () => {
		// GIVEN
		const text = 'We are doing JS string exercises.';

		// WHEN
		const transformedString = textTruncate(text, 15, '!!');

		// THEN
		expect(transformedString).toEqual('We are doing !!');
	});

	it(`should throw an error when ending string supplied is of zero length`, () => {
		// GIVEN
		const text = 'We are doing JS string exercises.';

		// WHEN THEN
		expect(() => textTruncate(text, 15, '')).toThrow('Ending string should have length greater than 0.');
	});

	it(`should throw an error when the value of number of characters is negative`, () => {
		// GIVEN
		const text = 'We are doing JS string exercises.';

		// WHEN THEN
		expect(() => textTruncate(text, -10)).toThrow('Number of characters should be a positive number.');
	});
})