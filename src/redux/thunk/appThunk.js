import {getAuthData} from "./profileThunk";
import {initializedSuccess} from "../reducers/appReducer";

export const initialize = () => dispatch => {
	const promise = dispatch(getAuthData());
	Promise.all([promise])
		.then(()=>{
			dispatch(initializedSuccess())
		})
};