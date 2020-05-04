import {CONSTS} from "../../consts";



export const addPostActionCreator = () => {
	return {
		type: CONSTS.POSTS.ADD_POST
	}
};

export const setValueActionCreator = (text) => {
	return {
		type: CONSTS.POSTS.SET_VALUE,
		value: text
	}
};

export const setProfileInfo = (profile) => ({type: CONSTS.PROFILE.SET_PROFILE_INFO, profile})