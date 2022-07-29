const hightlightBoldWords = () => {
	const boldElements = document.getElementsByClassName('bold-words');
	Object.entries(boldElements).forEach(element => {
		element[1].style.color = 'red';
		element[1].style.textDecoration = "underline";
	})
}

const removeHighlight = () => {
	const boldElements = document.getElementsByClassName('bold-words');
	Object.entries(boldElements).forEach(element => {
		element[1].style.color = 'black';
		element[1].style.textDecoration = "none";
	})
}