import { printGrades } from "./program";
console.log = jest.fn();
describe("printGrades", () => {
	it("should assert the correct logs", () => {
		// GIVEN
		const studentsInfo = {
			David: 80,
			Vinoth: 77,
			Divya: 88,
			Ishitha: 95,
			Thomas: 68,
		};

		//  WHEN
		printGrades(studentsInfo);

		// THEN
		expect([...console.log.mock.calls]).toEqual([
			["The average marks are: ", 81.6],
			["The overall grade is: ", "B"],
			["David's grade: ", "B"],
			["Vinoth's grade: ", "C"],
			["Divya's grade: ", "B"],
			["Ishitha's grade: ", "A"],
			["Thomas's grade: ", "D"],
		]);
	});

	it('should throw an error when marks are not between 0 and 100', () => {
		// GIVEN
		const studentInfo = {
			David: -80,
			Vinoth: 77,
			Divya: 88,
			Ishitha: 95,
			Thomas: 68,
		}

		// WHEN THEN
		expect(() => printGrades(studentInfo)).toThrow('Marks should be between 0 and 100.')
	});
});
