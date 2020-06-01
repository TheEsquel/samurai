import {CONSTS} from "../../consts";

let initialState = {
	posts: [
		{id: 1, name: "B-Complex", text: "Beautiful lies"},
		{id: 2, name: "Calibre", text: "Mr. Majestic"},
		{id: 3, name: "High Contrast", text: "Drop It Down"},
		{id: 4, name: "DC Breaks", text: "Pickett Line"},
		{id: 5, name: "Netsky", text: " I Refuse"},
		{id: 6, name: "Artificial Intelligence", text: "Desperado"},

	],
	newPostValue: "",
	profile: null,
	isLoading: false,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTS.POSTS.ADD_POST:
			console.log(action);
			return {
				...state,
				posts: [...state.posts, {
					id: state.posts.length++,
					name: "Esquel",
					text: action.post,
				}],

			};
		case CONSTS.PROFILE.SET_PROFILE_INFO:
			return {
				...state,
				profile: action.profile
			};
		case CONSTS.COMMON.SET_LOADING:
			return {
				...state,
				isLoading: action.loading
			};
		case CONSTS.PROFILE.GET_PROFILE_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
};

export default profileReducer;