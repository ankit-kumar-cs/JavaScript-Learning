export const thousandsSeparators = (number) => {
	const numbersSeparatedByDot = number.toString().split(".");
	numbersSeparatedByDot[0] =	numbersSeparatedByDot[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numbersSeparatedByDot.join(".");
}