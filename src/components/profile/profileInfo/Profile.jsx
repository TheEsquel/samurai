import React from 'react'
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/actions/profileActions";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from '../../../redux/thunk/profileThunk'
import Loader from "../../common/Loader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfileSelector} from "../../../redux/selectors/profileSelector";
import ProfileInfo from "./ProfileInfo";


class Profile extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId
					|| this.props.authData.profile.userId;
		console.log(this.props.authData.profile);
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return <>
			{ this.props.loading ? <Loader/> : <ProfileInfo {...this.props}/>
			}
		</>
	}
}
//
// const ProfileInfo = props => {
// 	useEffect(()=> {
// 		const userId = props.match.params.userId
// 			|| props.authData.profile.userId;
// 		console.log(props.authData.profile);
// 		props.getProfile(userId);
// 		props.getStatus(userId);
// 	}, []);
//
// 	return(
// 		<>
// 			{ props.loading ? <Loader/> : <Profile {...props}/>
// 			}
// 		</>
// 	)
// }

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
)(Profile);
