import {addPostActionCreator} from "../actions/profileActions";


export const addPost = post => dispatch => {
	console.log(post);
	dispatch(addPostActionCreator(post.post))
}