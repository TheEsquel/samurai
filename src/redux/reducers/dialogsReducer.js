import {CONSTS} from "../../consts";

let initialState = {
	dialogs: {
		users: [
			{id: 1, name: "Esquel"},
			{id: 2, name: "Omega"},
			{id: 3, name: "Taras"},
			{id: 4, name: "Urman"},
		],
		messages: [
			{id: 1, text: "Sup guys1"},
			{id: 2, text: "Sup guys2"},
			{id: 3, text: "Sup guys3"},
			{id: 4, text: "Sup guys4"},
		],
	},
	newMessageValue: "",
};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.DIALOG.SEND_NEW_MESSAGE:
			console.log(action);
			return {
				...state,
				dialogs: {
					...state.dialogs,
					messages: [...state.dialogs.messages, {id: 5, text: action.message}]}
			};
		default:
			return state
	}
};
export default dialogReducer;