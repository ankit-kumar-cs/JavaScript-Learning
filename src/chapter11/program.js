export const allProperties = (obj) => {
	Object.getOwnPropertyNames(obj).forEach(element => {
		if(typeof obj[element] === 'function')
			console.log(element);
	});
};