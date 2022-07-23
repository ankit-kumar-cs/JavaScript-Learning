export const getISO_numeric_date = (date) => {
	let day = date.getUTCDay();
	return day === 0 ? 7 : day;
}


