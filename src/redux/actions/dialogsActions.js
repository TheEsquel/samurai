import {CONSTS} from "../../consts";

export const sendNewMessage = (text) => {
	return {
		type: CONSTS.DIALOG.SEND_NEW_MESSAGE,
		message: text
	}
};