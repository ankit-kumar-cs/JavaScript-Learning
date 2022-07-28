import { mergeSort } from "./program";
describe("chapter-13 mergeSort", () => {
	it(`should sort the array having unique elements`, () => {
		// GIVEN
		const array = [3, 2, 1, 7, 6];

		// WHEN
		const result = mergeSort(array, 0, array.length - 1);

		// THEN
		expect(result).toEqual(array.sort((a, b) => a - b));
	});

	it(`should sort the array having duplicate elements`, () => {
		// GIVEN
		const array = [2, 2, 1, 7, 7];

		// WHEN
		const result = mergeSort(array, 0, array.length - 1);

		// THEN
		expect(result).toEqual(array.sort((a, b) => a - b));
	});

	it(`should sort the array having elements in descending order`, () => {
		// GIVEN
		const array = [5, 4, 3, 2, 1, 0, -2];

		// WHEN
		const result = mergeSort(array, 0, array.length - 1);

		// THEN
		expect(result).toEqual(array.sort((a, b) => a - b));
	});

	it(`should sort the array having elements in ascending order`, () => {
		// GIVEN
		const array = [5, 4, 3, 2, 1, 0, -2];

		// WHEN
		const result = mergeSort(array, 0, array.length - 1);

		// THEN
		expect(result).toEqual(array.sort((a, b) => a - b));
	});

	it(`should sort the array having zero elements`, () => {
		// GIVEN
		const array = [];

		// WHEN
		const result = mergeSort(array, 0, array.length - 1);

		// THEN
		expect(result).toEqual(array.sort((a, b) => a - b));
	});
});
