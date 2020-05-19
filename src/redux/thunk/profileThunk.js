import axios from "axios";
import {setLoading, setProfileInfo, getStatusActionCreator} from "../actions/profileActions";
import {profileAPI, usersAPI} from "../../api/api";
import {setAuthorizationData} from "../actions/authorizationActions";



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
			console.log(response.data)
			dispatch(getStatusActionCreator(response.data))
	})
}

export const updateStatus = (status) => (dispatch) => {
	console.log(status)
	profileAPI.setStatus(status)
		.then(response => {
			console.log(response)
		})
}

export const getAuthData = () => (dispatch) => {
	profileAPI.getAuthData().then(data => {
		dispatch(setAuthorizationData(data))
	})

};