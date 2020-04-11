import React from 'react';
import {addPostActionCreator, setValueActionCreator} from "../../../redux/actions/profileActions";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		state: state.profilePage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPost: (newValue) => dispatch(setValueActionCreator(newValue))
	}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer