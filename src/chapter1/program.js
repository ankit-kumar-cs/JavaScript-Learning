export const findSecondLargest = (array) => {
	for(let i = array.length - 1; i >= 0; i--) {
		console.log(array[i])
	}
	return array[0];
}

export const findSecondLargestRecursive = (array, low, high, maximumElement, currentSecondMaximum) => {
	const mid = parseInt((low + high) / 2);
	if(low >= high)
		return currentSecondMaximum;
	// console.log(low, high, maximumElement, currentSecondMaximum, array[mid]);
	if (array[mid] === maximumElement && currentSecondMaximum < maximumElement && currentSecondMaximum === -1) 
		return findSecondLargestRecursive(array, low, mid - 1, maximumElement, currentSecondMaximum);
	if (array[mid] === maximumElement && currentSecondMaximum < maximumElement && currentSecondMaximum != -1) 
		return currentSecondMaximum;
	else if(array[mid] < maximumElement && array[mid] > currentSecondMaximum) {
		return findSecondLargestRecursive(array, mid + 1, high, maximumElement, array[mid]);
	}
	else if(array[mid] < maximumElement && array[mid] <= currentSecondMaximum) {
		return currentSecondMaximum;
	}
}

// console.log(findSecondLargestRecursive([1,2,3, 4, 5], 0, 5, -1));