import {createSelector} from "reselect";

export const selectUsers = state => {
	return state.usersPage.users
};

export const selectPageSize = state => {
	return state.usersPage.pageSize
}

export const reselectUsers = createSelector(selectUsers , (users) => {
	return users.filter(u => true)
})