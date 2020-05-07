import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/actions/profileActions";
import {withRouter} from "react-router-dom";
import {getProfile} from  '../../../redux/thunk/profileThunk'
import Loader from "../../common/Loader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileInfo extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 7782;
		this.props.getProfile(userId);
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
	isAuthorized: state.authorization.isAuthorized
});

let AuthWithComponent = withAuthRedirect(ProfileInfo)
let withRouteProfileInfo = withRouter(AuthWithComponent)
export default connect(mapStateToProps, {setProfileInfo, getProfile})(withRouteProfileInfo)