import { isSame } from "./program";
describe("chapter-12 isSame", () => {
	it(`should return true when both values are of same type`, () => {
		// GIVEN WHEN THEN
		const result1 = isSame('12', '100');
		const result2 = isSame(12, 100);
		const result3 = isSame(null, null);
		const result4 = isSame(undefined, undefined);
		const result5 = isSame({}, {});
		console.log([result1, result2, result3, result4, result5]);

		// THEN
		expect([result1, result2, result3, result4, result5].every(result => result)).toBe(true);
	});

	it(`should return false when both values are of different type`, () => {
		// GIVEN WHEN THEN
		const result1 = isSame('12', 100);
		const result2 = isSame(12, '100');
		const result3 = isSame(null, undefined);
		const result4 = isSame(undefined, 1);
		const result5 = isSame({}, '12');
		console.log([result1, result2, result3, result4, result5]);

		// THEN
		expect([result1, result2, result3, result4, result5].every(result => result)).toBe(false);
	});
});
