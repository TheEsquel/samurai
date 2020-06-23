import {usersAPI} from "../../api/api";
import {setLoading, setPage, setTotal, setUsers, follow, unfollow} from "../actions/usersActions"

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setLoading(true));
	dispatch(setPage(currentPage));
	let response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(response.items));
	dispatch(setTotal(response.totalCount));
	dispatch(setLoading(false));
};

export const followUser = (userId) => async (dispatch) => {
	let response = await usersAPI.followUser(userId);
	if (response.data.resultCode === 0)
		dispatch(follow(userId))
};

export const unfollowUser = (userId) => async dispatch => {
	let response = await usersAPI.unfollowUser(userId);
	if (response.data.resultCode === 0)
		dispatch(unfollow(userId))
};