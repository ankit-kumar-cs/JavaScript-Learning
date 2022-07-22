import { calculateHCF, calculateLCM, lcmMoreThanTwoNumbers } from "./program";

describe('chapter-4 calculateHCF', () => {
	it('should assert correctly when a = 10 and b = 15', () => {
		// GIVEN
		const [a, b] = [10, 15];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(5);
	});

	it('should assert correctly when a = 2 and b = 3', () => {
		// GIVEN
		const [a, b] = [2, 3];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(1);
	});

	it('should assert correctly when a = 1 and b = 1', () => {
		// GIVEN
		const [a, b] = [1, 1];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(1);
	});

	it('should assert correctly when a = 10 and b = 11', () => {
		// GIVEN
		const [a, b] = [10, 11];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(1);
	});

	it('should assert correctly when a = 1001 and b = 1112', () => {
		// GIVEN
		const [a, b] = [1001, 1112];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(1);
	});

	it('should assert correctly when a = 1001 and b = 1111', () => {
		// GIVEN
		const [a, b] = [1001, 1111];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(11);
	});

	it('should assert correctly when a = 1111 and b = 1001', () => {
		// GIVEN
		const [b, a] = [1001, 1111];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(11);
	});

	it('should assert correctly when a = -6 and b = -9', () => {
		// GIVEN
		const [a, b] = [-6, -9];

		// WHEN 
		const response = calculateHCF(a, b);

		// THEN
		expect(response).toBe(3);
	});
});

describe('chapter-4 calculateLCM', () => {
	it('should assert correctly when a = 2 and b = 3', () => {
		// GIVEN
		const [a, b] = [2, 3];

		// WHEN
		const response = calculateLCM(a, b);

		// THEN
		expect(response).toBe(6);
	});

	it('should assert correctly when a = 4 and b = 8', () => {
		// GIVEN
		const [a, b] = [4, 8];

		// WHEN
		const response = calculateLCM(a, b);

		// THEN
		expect(response).toBe(8);
	});

	it('should assert correctly when a = 11 and b = 13', () => {
		// GIVEN
		const [a, b] = [11, 13];

		// WHEN
		const response = calculateLCM(a, b);

		// THEN
		expect(response).toBe(143);
	});

	it('should assert correctly when a = 1 and b = 1', () => {
		// GIVEN
		const [a, b] = [1, 1];

		// WHEN
		const response = calculateLCM(a, b);

		// THEN
		expect(response).toBe(1);
	});

	it('should assert correctly when a = -3 and b = -4', () => {
		// GIVEN
		const [a, b] = [-3, -4];

		// WHEN
		const response = calculateLCM(a, b);

		// THEN
		expect(response).toBe(12);
	});
});

describe('chapter-4 lcmMoreThanTwoNumbers', () => {
	it('should assert the value correctly when the array is [100,90,80,7]', () => {
		// GIVEN
		const array = [100,90,80,7];

		// WHEN
		const response = lcmMoreThanTwoNumbers(array);

		// THEN
		expect(response).toBe(25200);
	});

	it('should assert the value correctly when the array is [5,10,15,25]', () => {
		// GIVEN
		const array = [5,10,15,25];

		// WHEN
		const response = lcmMoreThanTwoNumbers(array);

		// THEN
		expect(response).toBe(150);
	});

	it('should throw an error when the array is having length less than 2', () => {
		// GIVEN
		const array = [5];

		// WHEN
		expect(() => lcmMoreThanTwoNumbers(array)).toThrow('Array should have at least 2 values.');
	});
})