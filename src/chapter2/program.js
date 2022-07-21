export const fibonacci = (numberOfTerms, lastTerm = { value : -1 }) => {
	if (numberOfTerms <= 0) {
		console.log('The number of terms should be greater than  0');
		return;
	}
	if (numberOfTerms >= 1 && numberOfTerms <= 2) {
		if (lastTerm.value === -1) {
			if (numberOfTerms === 2) {
				console.log(0, ' ');
				console.log(1, ' ');
			}
			else {
				console.log(0, ' ');
			}
			lastTerm.value = 1;
		}
		return numberOfTerms - 1;
	}
	const result = fibonacci(numberOfTerms - 1, lastTerm) + fibonacci(numberOfTerms - 2, lastTerm);
	if (result >= lastTerm.value) {
		lastTerm.value = result;
		console.log(result, ' ');
	}
	return result;
}