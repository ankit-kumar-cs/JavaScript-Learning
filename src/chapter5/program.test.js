import { computeSumOfArrays } from "./program";

describe('chapter-5 computeSumOfArrays', () => {
	it ('should assert the correct values when both array1 length is lesser than array2 length', () => {
		// GIVEN
		const array1 = [1, 0, 2, 3, 4],
		array2 = [3, 5, 6, 7, 8, 13];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array2.length);
		expect(resultantArray).toEqual([4, 5, 8, 10, 12, 13])
	});

	it ('should assert the correct values when array1 length is greater than array2 length', () => {
		// GIVEN
		const array2 = [1, 0, 2, 3, 4],
		array1 = [3, 5, 6, 7, 8, 13];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array1.length);
		expect(resultantArray).toEqual([4, 5, 8, 10, 12, 13])
	});

	it ('should assert the correct values when both array length is equal', () => {
		// GIVEN
		const array1 = [1, 0, 2, 3, 4],
		array2 = [3, 5, 6, 7, 8];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array1.length);
		expect(resultantArray).toEqual([4, 5, 8, 10, 12])
	});

	it ('should assert the correct values when both array1 length is zero and array2 is greater than 0', () => {
		// GIVEN
		const array1 = [],
		array2 = [3, 5, 6, 7, 8];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array2.length);
		expect(resultantArray).toEqual([3, 5, 6, 7, 8])
	});

	it ('should assert the correct values when both array2 length is zero and array1 is greater than 0', () => {
		// GIVEN
		const array2 = [],
		array1 = [3, 5, 6, 7, 8];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array1.length);
		expect(resultantArray).toEqual([3, 5, 6, 7, 8])
	});

	it ('should return the empty array when both array length is 0', () => {
		// GIVEN
		const array1 = [],
		array2 = [];

		// WHEN
		const resultantArray = computeSumOfArrays(array1, array2);

		// THEN
		expect(resultantArray.length).toBe(array1.length);
		expect(resultantArray).toEqual([])
	});
})