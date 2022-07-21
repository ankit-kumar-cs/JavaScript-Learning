export const findSecondLargestRecursive = (array, low, high, maximumElement, currentSecondMaximum) => {
	const mid = parseInt((low + high) / 2);
	if(low >= high)
		return currentSecondMaximum;
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