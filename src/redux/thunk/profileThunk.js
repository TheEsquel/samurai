import {setLoading, setProfileInfo, getStatusActionCreator} from "../actions/profileActions";
import {profileAPI, authAPI} from "../../api/api";
import {setAuthorizationData} from "../actions/authorizationActions";
import {reset, stopSubmit} from "redux-form";

export const getProfile = (userId) => async (dispatch) => {
	dispatch(setLoading(true));
	let response = await profileAPI.getProfile(userId)
	dispatch(setLoading(false));
	dispatch(setProfileInfo(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(getStatusActionCreator(response.data))
};

export const updateStatus = (status) => async () => {
	return await profileAPI.setStatus(status)
};

export const getAuthData = () => async (dispatch) => {
	let data = await authAPI.me();
	if (data.resultCode === 0) {
		dispatch(setAuthorizationData(data.data.id, data.data.email, data.data.login, true))
	} else if (data.resultCode === 1) {
		dispatch(setAuthorizationData(null, null, null, false))
	}
};

export const login = (email, password, rememberMe) => async dispatch => {
	let response = await authAPI.login(email, password, rememberMe)
	console.log(response);
	if (response.data.resultCode === 0) {
		dispatch(getAuthData());
		dispatch(reset('login'))
	} else {
		dispatch(stopSubmit('login', {_error: response.data.messages}))
	}
};

export const logout = () => async dispatch => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthorizationData(null, null, null, false))
	}
};

