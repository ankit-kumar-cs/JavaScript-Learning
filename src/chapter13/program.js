export const mergeSort = (array, low, high) => {
	const mid = parseInt((low + high) / 2);
	if (low >= high) {
		return array.slice(low, high + 1);
	} 
		
	const arr1 = mergeSort(array, low, mid);
	const arr2 = mergeSort(array, mid + 1, high);
	return mergeTwoSortedArrays(arr1, arr2);
}

const mergeTwoSortedArrays = (array1, array2) => {
	let firstIndex = 0, secondIndex = 0, finalArray = [];
	while (firstIndex < array1.length && secondIndex < array2.length) {
		if (array1[firstIndex] > array2[secondIndex]) {
			finalArray.push(array2[secondIndex]);
			secondIndex++;
		}
		else {
			finalArray.push(array1[firstIndex]);
			firstIndex++;
		}
	}

	while (firstIndex < array1.length) {
		finalArray.push(array1[firstIndex]);
		firstIndex++;
	}

	while (secondIndex < array2.length) {
		finalArray.push(array2[secondIndex]);
		secondIndex++;
	}
	return finalArray;
}

// const array = [3, 1, 4, 2, 7];
// console.log(mergeSort(array,0, 4));
