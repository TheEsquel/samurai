import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

export const consts =
	{
		ADD_POST: 'ADD_POST',
		SET_VALUE: 'SET_VALUE',
		SET_NEW_MESSAGE_VALUE: 'SET_NEW_MESSAGE_VALUE',
		SEND_NEW_MESSAGE: 'SEND_NEW_MESSAGE',
	};

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, name: "B-Complex", text: "Beautiful lies"},
				{id: 2, name: "Calibre", text: "Mr. Majestic"},
				{id: 3, name: "High Contrast", text: "Drop It Down"},
				{id: 4, name: "DC Breaks", text: "Pickett Line"},
				{id: 5, name: "Netsky", text: " I Refuse"},
				{id: 6, name: "Artificial Intelligence", text: "Desperado"},

			],
			newPostValue: "",
		},
		dialogsPage: {
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
		},
		sidebarPage: {},
	},
	_render() {
		console.log('no subscribes yet')
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._render = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._render(this.getState());
	}

};

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


export default store
window.store = store;




