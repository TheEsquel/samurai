import {usersAPI} from "../../api/api";
import {setLoading, setPage, setTotal, setUsers, follow, unfollow} from "../actions/usersActions"

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(setLoading(true));
	if (pageSize && currentPage)
		usersAPI.getUsers(currentPage, pageSize).then(response => {
			dispatch(setUsers(response.items));
			dispatch(setTotal(response.totalCount));
			dispatch(setPage(currentPage))
			dispatch(setLoading(false));
		});

};

export const followUser = (userId) => (dispatch) => {
	usersAPI.followUser(userId).then(response => {
		if(response.data.resultCode === 0)
			dispatch(follow(userId))
	});
};

export const unfollowUser = (userId) => (dispatch) => {
	usersAPI.unfollowUser(userId).then(response => {
		if(response.data.resultCode === 0)
			dispatch(unfollow(userId))
	});
};