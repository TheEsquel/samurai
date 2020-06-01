import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";
import {addPost} from "../../../redux/thunk/postsThunk";

const mapStateToProps = (state) => {
	return {
		state: state.profilePage
	}
};


const PostsContainer = compose(
	connect(mapStateToProps, {addPost})
)(Posts);


export default PostsContainer