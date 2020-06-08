import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import ProfileContainer from './components/profile/ProfileContainer'
import {BrowserRouter as Router, withRouter} from 'react-router-dom'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/common/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from './redux/thunk/appThunk'
import {getAuthData} from "./redux/thunk/profileThunk";
import Loader from "./components/common/Loader";

class App extends Component {

	componentDidMount() {
		this.props.initialize()
	}

	render() {
		console.log(this.props);
		if(!this.props.initialized)
			return <Loader />
		return (
			<Router>
				<div className="wrapper">
					<HeaderContainer/>
					<Navbar/>
					<div className="app_wrapper_content">
						<Route path='/dialogs' render={() =>
							<DialogsContainer/>}
						/>
						<Route path='/profile/:userId?' render={() =>
							<ProfileContainer/>}
						/>
						<Route path='/users' render={() =>
							<UsersContainer/>
						}/>
						<Route path='/login' render={() =>
							<Login/>
						}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized
})

export default compose(
	connect(mapStateToProps, {initialize}),
	withRouter
)(App);
