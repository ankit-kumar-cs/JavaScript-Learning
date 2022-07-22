export const calculateHCF = (a, b) => {
	if (a != b) {
		const [min, num] = getAbsoluteDifference(Math.abs(a), Math.abs(b));
		[a, b] = getOrderedNumber(min, num);
		return calculateHCF(a, b);
	}
	return a;
}

const getAbsoluteDifference = (a, b) => {
	return a > b ? [b, a - b] : [a, b - a];
}

const getOrderedNumber = (a, b) => {
	return a > b ? [b, a] : [a, b];
}

export const calculateLCM = (a, b) => {
	return (Math.abs(a * b)) / calculateHCF(a, b);
}

export const lcmMoreThanTwoNumbers = (array) => {
	if (array.length < 2)
		throw new Error('Array should have at least 2 values.')
	return array.reduce((LCMTillNow, currentValue) => calculateLCM(LCMTillNow, currentValue), array[0]);
}