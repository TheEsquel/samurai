import {CONSTS} from "../../consts";

const initialState = {
	login: null,
	profile: null,
	isAuthorized: false,
};

const authorizationReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.AUTHORIZATION.SET_LOGIN_DATA:
			console.log(action)
			return{
				...state,
				profile: action.data,
				isAuthorized: true
			};
		default:
			return state
	}
}

export default authorizationReducer