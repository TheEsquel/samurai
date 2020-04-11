import {consts} from "../store";

export const addPostActionCreator = () => {
	return {
		type: consts.ADD_POST
	}
};

export const setValueActionCreator = (text) => {
	return {
		type: consts.SET_VALUE,
		value: text
	}
};