import {consts} from "../../consts";

let initialState = {
	dialogs: {
		users: [
			{id: 1, name: "Esquel"},
			{id: 2, name: "Omega"},
			{id: 3, name: "Taras"},
			{id: 4, name: "Urman"},
		],
		messages: [
			{id: 1, text: "Sup guys"},
			{id: 2, text: "Sup guys"},
			{id: 3, text: "Fuck"},
			{id: 4, text: "Another message"},
		],
	},
	newMessageValue: "",
};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case consts.SET_NEW_MESSAGE_VALUE:
			state.newMessageValue = action.value;
			return state;
		case consts.SEND_NEW_MESSAGE:
			let newMessage = {
				id: 5,
				text: state.newMessageValue,
			};
			state.dialogs.messages.push(newMessage);
			// state.newMessageValue = '';
			return state;
		default:
			return state
	}
};
export default dialogReducer;