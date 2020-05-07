import {CONSTS} from "../../consts";

export const follow = (id) => ({type: CONSTS.USERS.FOLLOW, id});
export const unfollow = (id) => ({type: CONSTS.USERS.UNFOLLOW, id});
export const setUsers = (users) => ({type: CONSTS.USERS.SET_USERS, users});
export const setPage = (page) => ({type:CONSTS.USERS.SET_PAGE, page});
export const setTotal = totalCount => ({type: CONSTS.USERS.SET_TOTAL, totalCount});
export const setLoading = (loading) => ({type: CONSTS.COMMON.SET_LOADING, loading});