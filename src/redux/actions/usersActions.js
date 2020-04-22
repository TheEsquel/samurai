export const USERS_CONST = {
	FOLLOW: 'FOLLOW',
	UNFOLLOW: 'UNFOLLOW'
}


export const followActionCreator = (userId) => ({type: USERS_CONST.FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: USERS_CONST.UNFOLLOW, userId})