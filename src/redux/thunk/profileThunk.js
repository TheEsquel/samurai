import {setLoading, setProfileInfo, getStatusActionCreator} from "../actions/profileActions";
import {profileAPI, authAPI} from "../../api/api";
import {setAuthorizationData} from "../actions/authorizationActions";
import {reset} from "redux-form";


export const getProfile = (userId) => (dispatch) => {
	dispatch(setLoading(true))
	profileAPI.getProfile(userId)
		.then(response => {
			dispatch(setLoading(false));
			dispatch(setProfileInfo(response.data))
		});
}


export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(getStatusActionCreator(response.data))
	})
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.setStatus(status)
		.then(response => {
			console.log(response)
		})
}

export const getAuthData = () => (dispatch) => {
	return authAPI.getAuthData().then(data => {
		if(data.resultCode === 0 ) {
			dispatch(setAuthorizationData(data.data.id, data.data.email, data.data.login, true))
		} else if (data.resultCode === 1) {
			dispatch(setAuthorizationData(null, null, null, false))
		}

	})
};

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			console.log(response);
			if(response.data.resultCode === 0){
				dispatch(getAuthData())
				dispatch(reset('login'))
			}
		})
};

export const logout = () => dispatch => {
	authAPI.logout()
		.then(response => {
			if(response.data.resultCode === 0){
				dispatch(setAuthorizationData(null, null, null, false))
			}
		})
};

