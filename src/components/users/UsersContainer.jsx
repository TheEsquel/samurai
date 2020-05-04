import React from 'react'
import {connect} from "react-redux";
import {
	follow, setPage, setTotal,
	setUsers, unfollow, setLoading,
} from "../../redux/actions/usersActions";
import axios from "axios";
import Users from "./Users";
import Loader from "../common/Loader";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		isLoading: state.usersPage.isLoading,
	}
};

class UsersContainer extends React.Component {

	componentDidMount() {
		const {pageSize, currentPage} = this.props;
		this.props.setLoading(true)
		if (pageSize && currentPage)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
				.then(response => {
					console.log(response.data)
					this.props.setUsers(response.data.items);
					this.props.setTotal(response.data.totalCount);
					this.props.setLoading(false)
				});
	}
	onPageChanged = (page) => {
		this.props.setLoading(true)
		this.props.setPage(page)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setLoading(false)
			});
	}
	render() {
		return <>
				{ this.props.isLoading ? <Loader/> : null}
				<Users
					users={this.props.users}
					pageSize={this.props.pageSize}
					totalCount={this.props.totalCount}
					currentPage={this.props.currentPage}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					onPageChanged={this.onPageChanged}
				/>
			</>
	}
}

UsersContainer = connect(mapStateToProps, {follow, setPage, setTotal, setUsers, unfollow, setLoading,})(UsersContainer);
export default UsersContainer