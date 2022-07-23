export const getISO_numeric_date = (date) => {
	console.log(date.toString());
	let day = date.getUTCDay();
	return day === 0 ? 7 : day;
}


