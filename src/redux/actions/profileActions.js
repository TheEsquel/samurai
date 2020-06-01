import {CONSTS} from "../../consts";

export const addPostActionCreator = post => ({type: CONSTS.POSTS.ADD_POST, post});

export const setProfileInfo = (profile) => ({type: CONSTS.PROFILE.SET_PROFILE_INFO, profile})

export const getStatusActionCreator = (status) => ({type: CONSTS.PROFILE.GET_PROFILE_STATUS, status});

export const setLoading = (loading) => ({type: CONSTS.COMMON.SET_LOADING, loading});