import {CONSTS} from "../../consts";

const initialState = {
	login: null,
	profile: null,
	isAuthorized: false,
};

const authorizationReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.AUTHORIZATION.SET_LOGIN_DATA:
			if(action.data.resultCode === 0){
				return{
					...state,
					profile: action.data,
					isAuthorized: true
				};
			}else {
				return {
					...state
				}
			}

		default:
			return state
	}
}

export default authorizationReducer