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
	// debugger;
	switch (action.type) {
		case consts.SET_NEW_MESSAGE_VALUE:
			return {
				...state,
				newMessageValue: action.value
			};
		case consts.SEND_NEW_MESSAGE:
			const body =  state.newMessageValue;
			return {
				...state,
				dialogs: {
					...state.dialogs,
					newMessageValue: '',
					messages: [...state.dialogs.messages, {id: 5, text: body}]}
			};
		default:
			return state
	}
};
export default dialogReducer;