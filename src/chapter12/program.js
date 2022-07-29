export const isSame = (value1, value2) => {
	return toString.call(value1) === toString.call(value2);
};