export const required = value => {
	return !value ?  "This field is required" : undefined;
};

export const minLength = value => {
	return value.length <=4 ? "Minimum 4  characters" : undefined
};