import { allProperties } from "./program";
describe("chapter-11 allProperties", () => {
	it(`should return all the methods for the given custom object`, () => {
		// GIVEN
		const obj = {
			a: 1,
			b: () => { },
			c: () => { },
			d: "test",
		};
		console.log = jest.fn();

		// WHEN
		const result = allProperties(obj);

		// THEN
		expect([...console.log.mock.calls]).toEqual([["b"], ["c"]]);
	});

	it(`should return all the methods for the Array object`, () => {
		// GIVEN
		const obj = Array.prototype;
		console.log = jest.fn();

		// WHEN
		const result = allProperties(obj)
		// THEN
		expect([...console.log.mock.calls]).toEqual([
				["constructor"],
				["concat"],
				["copyWithin"],
				["fill"],
				["find"],
				["findIndex"],
				["lastIndexOf"],
				["pop"],
				["push"],
				["reverse"],
				["shift"],
				["unshift"],
				["slice"],
				["sort"],
				["splice"],
				["includes"],
				["indexOf"],
				["join"],
				["keys"],
				["entries"],
				["values"],
				["forEach"],
				["filter"],
				["flat"],
				["flatMap"],
				["map"],
				["every"],
				["some"],
				["reduce"],
				["reduceRight"],
				["toLocaleString"],
				["toString"],
				["at"]
		]);
	});
});
