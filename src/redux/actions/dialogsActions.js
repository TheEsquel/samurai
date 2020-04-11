import {consts} from "../store";

export const setNewMessageValueActionCreator = (text) => {
	return {
		type: consts.SET_NEW_MESSAGE_VALUE,
		value: text
	}
};
export const sendNewMessage = (text) => {
	return {
		type: consts.SEND_NEW_MESSAGE,
		value: text
	}
};