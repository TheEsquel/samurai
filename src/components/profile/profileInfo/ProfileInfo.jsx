import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/actions/profileActions";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from '../../../redux/thunk/profileThunk'
import Loader from "../../common/Loader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileInfo extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 7782;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return <>
			{ this.props.loading ? <Loader/> : <Profile {...this.props}/>
			}
		</>
	}
}

const mapStateToProps = (state) =>({
	profile: state.profilePage.profile,
	loading: state.profilePage.isLoading,
	isAuthorized: state.authorization.isAuthorized,
	status: state.profilePage.status,
});

export default compose(
	connect(mapStateToProps, {setProfileInfo, getProfile, getStatus, updateStatus}),
	// withAuthRedirect,
	withRouter
)(ProfileInfo);
