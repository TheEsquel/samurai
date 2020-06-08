import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/actions/profileActions";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from '../../../redux/thunk/profileThunk'
import Loader from "../../common/Loader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfileSelector} from "../../../redux/selectors/profileSelector";


class ProfileInfo extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId
					|| this.props.authData.profile.userId;
		console.log(this.props.authData.profile);
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		console.log(this.props);
		return <>
			{ this.props.loading ? <Loader/> : <Profile {...this.props}/>
			}
		</>
	}
}

const mapStateToProps = (state) =>({
	profile: getProfileSelector(state),
	loading: state.profilePage.isLoading,
	status: state.profilePage.status,
	authData: state.authorization
});

export default compose(
	connect(mapStateToProps, {setProfileInfo, getProfile, getStatus, updateStatus}),
	withAuthRedirect,
	withRouter
)(ProfileInfo);
