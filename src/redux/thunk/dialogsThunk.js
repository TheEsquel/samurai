import {sendNewMessage} from "../actions/dialogsActions";

export const addMessage = message => dispatch => {
	console.log(message);
	dispatch(sendNewMessage(message.message))
}