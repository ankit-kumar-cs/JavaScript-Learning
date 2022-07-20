import { findSecondLargest, findSecondLargestRecursive } from './program';
describe('findSecondLargest', () => {
	it('should assert the correct response for positive test case when there is no duplicate in the array', () => {
		// GIVEN
		const array = [1, 2, 3, 4, 5];
		const secondMaximum = findSecondLargestRecursive(array, 0, array.length - 1, array[array.length - 1], -1);
		expect(secondMaximum).toBe(4);
	})

	it('should assert the correct response for positive test case when there is one duplicate in the array', () => {
		// GIVEN
		const array = [1, 2, 3, 3, 5];
		const secondMaximum = findSecondLargestRecursive(array, 0, array.length - 1, array[array.length - 1], -1);
		expect(secondMaximum).toBe(3);
	})

	it('should assert the correct response for positive test case when there are multiple duplicates in the array', () => {
		// GIVEN
		const array = [2, 2, 3, 3, 3];
		const secondMaximum = findSecondLargestRecursive(array, 0, array.length - 1, array[array.length - 1], -1);
		expect(secondMaximum).toBe(2);
	})
	it('should assert the correct response when the array is of size 1', () => {
		// GIVEN
		const array = [1];
		const secondMaximum = findSecondLargestRecursive(array, 0, array.length - 1, array[array.length - 1], -1);
		expect(secondMaximum).toBe(-1);
	})
})