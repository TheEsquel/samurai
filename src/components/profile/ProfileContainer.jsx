import React from 'react';
import PostsContainer from "./posts/PostsContainer";
import Profile from "./profileInfo/Profile";

class ProfileContainer extends React.Component {
	render() {
		return (
			<div >
				<Profile />
				{/*<PostsContainer />*/}
			</div>)
	}
}

export default ProfileContainer
