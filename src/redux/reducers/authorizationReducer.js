import {CONSTS} from "../../consts";

const initialState = {
	profile: null,
	isAuthorized: false,
};

const authorizationReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.AUTHORIZATION.SET_LOGIN_DATA:
			console.log(action.payload);
				return{
					...state,
					profile: action.payload,
					isAuthorized: action.payload.isAuth
			}

		default:
			return state
	}
}

export default authorizationReducer