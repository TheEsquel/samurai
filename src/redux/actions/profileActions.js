import {CONSTS} from "../../consts";



export const addPostActionCreator = () => ({type: CONSTS.POSTS.ADD_POST});

export const setValueActionCreator = (text) => ({type: CONSTS.POSTS.SET_VALUE, value: text});

export const setProfileInfo = (profile) => ({type: CONSTS.PROFILE.SET_PROFILE_INFO, profile})

export const setLoading = (loading) => ({type: CONSTS.COMMON.SET_LOADING, loading});

export const getStatusActionCreator = (status) => ({type: CONSTS.PROFILE.GET_PROFILE_STATUS, status});