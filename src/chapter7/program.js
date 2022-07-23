export const textTruncate = (text, numberOfCharacters = 0, endingString = '...') => {
	if (numberOfCharacters === 0) return text;
	if (endingString.length === 0) throw new Error('Ending string should have length greater than 0.');
	if (numberOfCharacters < 0) throw new Error('Number of characters should be a positive number.');
	let finalString = '';
	for (let i = 0; i < text.length; i++) {
		if (finalString.length < (numberOfCharacters - endingString.length)) {
			finalString += text[i];
		}
		else
			break;
	}
	finalString += endingString;
	return finalString;
}