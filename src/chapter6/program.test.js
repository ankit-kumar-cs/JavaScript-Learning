import { getISO_numeric_date } from "./program";
const weekdayNameMappping = {
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thrusday: 4,
	Friday: 5,
	Saturday: 6,
	Sunday: 7
}
describe('chapter-6 getISO_numeric_date', () => {
	Object.entries(weekdayNameMappping).forEach((weekdayInfo, index) => {
		it(`should return the correct number when day is ${weekdayInfo[0]}`, () => {
			// GIVEN
			let dt = new Date('Mon Jul 25 2022 16:35:33 GMT+0530');
			dt.setDate(dt.getDate() + index);
	
			// WHEN
			const day = getISO_numeric_date(dt);
	
			// THEN
			expect(day).toBe(weekdayInfo[1]);
		});
	})
})