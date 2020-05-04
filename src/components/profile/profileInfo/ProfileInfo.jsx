import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/actions/profileActions";
import {withRouter} from "react-router-dom";


class ProfileInfo extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 7782;
		console.log(userId);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setProfileInfo(response.data)
			});
	}

	render() {
		return <Profile {...this.props}/>
	}
}

const mapStateToProps = (state) =>({
	profile: state.profilePage.profile
})
let withRouteProfileInfo = withRouter(ProfileInfo)
export default connect(mapStateToProps, {setProfileInfo})(withRouteProfileInfo)