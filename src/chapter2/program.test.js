import { fibonacci } from './program';
describe('fibonacci', () => {
	it('should assert the logs when the number of terms is 5', () => {
		// GIVEN
		const numberOfTerms = 5;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([[0, " "], [1, " "], [1, " "], [2, " "], [3, " "]]);
	})

	it('should assert the logs when the number of terms is 4', () => {
		// GIVEN
		const numberOfTerms = 4;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([[0, " "], [1, " "], [1, " "], [2, " "]]);
	})

	it('should assert the logs when the number of terms is 6', () => {
		// GIVEN
		const numberOfTerms = 6;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([[0, " "], [1, " "], [1, " "], [2, " "], [3, " "], [5, " "]]);
	})

	it('should assert the logs when the number of terms is 0', () => {
		// GIVEN
		const numberOfTerms = 0;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([['The number of terms should be greater than  0']]);
	})

	it('should assert the logs when the number of terms is 1', () => {
		// GIVEN
		const numberOfTerms = 1;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([[0, " "]]);
	})

	it('should assert the logs when the number of terms is negative', () => {
		// GIVEN
		const numberOfTerms = -1;
		console.log = jest.fn();

		// WHEN
		fibonacci(numberOfTerms);

		// THEN
		expect([...console.log.mock.calls]).toEqual([['The number of terms should be greater than  0']]);
	})
})