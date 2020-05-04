import React from 'react';
import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
	render() {
		return (
			<div >
				<ProfileInfo/>
				<PostsContainer
					state={this.props.state}
					dispatch={this.props.dispatch}
				/>
			</div>)
	}
}

export default ProfileContainer
