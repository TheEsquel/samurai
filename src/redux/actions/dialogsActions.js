import {CONSTS} from "../../consts";

export const setNewMessageValueActionCreator = (text) => {
	return {
		type: CONSTS.DIALOG.SET_NEW_MESSAGE_VALUE,
		value: text
	}
};
export const sendNewMessage = (text) => {
	return {
		type: CONSTS.DIALOG.SEND_NEW_MESSAGE,
		value: text
	}
};