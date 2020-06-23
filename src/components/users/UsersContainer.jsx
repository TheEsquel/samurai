import React from 'react'
import {connect} from "react-redux";
import {
	setPage, setTotal,
	setUsers, setLoading,
} from "../../redux/actions/usersActions";
 import Users from "./Users";
import Loader from "../common/Loader";
import {getUsers, followUser, unfollowUser} from "../../redux/thunk/usersThunk";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {reselectUsers, selectPageSize} from "../../redux/selectors/usersSelector";

const mapStateToProps = (state) => {
	console.log(state);
	return {
		users: reselectUsers(state),
		pageSize: selectPageSize(state),
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		isLoading: state.usersPage.isLoading,
	}
};

class UsersContainer extends React.Component {

	componentDidMount() {
		const {pageSize, currentPage} = this.props;
		this.props.getUsers(currentPage, pageSize)
	}
	onPageChange = (page) => {
		this.props.getUsers(page, this.props.pageSize)
	}
	render() {
		console.log(this.props);
		return <>
				{ this.props.isLoading ? <Loader/> :
					<Users
						users={this.props.users}
						pageSize={this.props.pageSize}
						totalCount={this.props.totalCount}
						currentPage={this.props.currentPage}
						unfollow={this.props.unfollowUser}
						follow={this.props.followUser}
						onPageChange={this.onPageChange}
					/>
				}

			</>
	}
}

export default compose(
	connect(mapStateToProps, {setPage, setTotal, setUsers, followUser,  unfollowUser, setLoading, getUsers}),
	withAuthRedirect
)(UsersContainer)