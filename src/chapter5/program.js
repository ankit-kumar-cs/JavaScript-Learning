export const computeSumOfArrays = (array1, array2) => {
	let finalArray = [];
	let i = 0, j = 0;
	while (i < array1.length && j < array2.length) {
		finalArray.push(array1[i] + array2[j]);
		i++;
		j++;
	}
	while (i < array1.length) {
		finalArray.push(array1[i]);
		i++;
	}
	while (j < array2.length) {
		finalArray.push(array2[j]);
		j++;
	}
	return finalArray;
}

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];