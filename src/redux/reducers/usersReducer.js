import followActionCreator from './../actions/usersActions'
import unfollowActionCreator from './../actions/usersActions'
import USERS_CONST from './../actions/usersActions'

let initialState = {
	users: [
		{id:1, followed: true, name: 'Rem', status: "the sun will rise and we will try again", location: {country: "UK", city: "London" }},
		{id:2, followed: true, name: 'Arthur', status: "better your means better universe", location: {country: "Russia", city: "Moscow" }},
		{id:3, followed: false, name: 'Oleg', status: "not certain yet", location: {country: "Germany", city: "Berlin" }},
	]
};

const usersReducer = (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case USERS_CONST.FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(action.userId === u.id){
						return {...u, followed: true}
					}
				})
			};
		case USERS_CONST.UNFOLLOW:
		default:
			return state
	}
};
export default usersReducer;