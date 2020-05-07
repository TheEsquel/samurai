import {CONSTS} from './../../consts'

let initialState = {
	users: [],
	totalCount: 0,
	currentPage: 1,
	pageSize: 5,
	isLoading: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.USERS.FOLLOW:
			return {
				...state,
				users: state.users.map(u => action.id === u.id ? {...u, followed: true} : u)
			};
		case CONSTS.USERS.UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => action.id === u.id ? {...u, followed: false} : u)
			};
		case CONSTS.COMMON.SET_LOADING:
			return {
				...state,
				isLoading: action.loading,
			}
		case CONSTS.USERS.SET_USERS:
			return {
				...state,
				users: action.users,
			};
		case CONSTS.USERS.SET_PAGE:
			return {
				...state,
				currentPage: action.page,
				users: state.users,
			};
		case CONSTS.USERS.SET_TOTAL:
			console.log(action);
			return {
				...state,
				totalCount: action.totalCount
			}
		default:
			return state
	}
};

export default usersReducer;