import {CONSTS} from "../../consts";

const initialState = {
	initialized: false
};

export const initializedSuccess = () => ({type: CONSTS.APP.INITIALIZED_SUCCESS });

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.APP.INITIALIZED_SUCCESS:
			return{
				...state,
				initialized: true,
			};

		default:
			return state
	}
}

export default appReducer