import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import ProfileContainer from './components/profile/ProfileContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/common/Login";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<HeaderContainer/>
				<Navbar/>
				<div className="app_wrapper_content">
					<Route path='/dialogs' render={() =>
						<DialogsContainer />}
					/>
					<Route path='/profile/:userId?' render={() =>
						<ProfileContainer />}
					/>
					<Route path='/users' render={() =>
						<UsersContainer />
					}/>
					{/*<Route path='/login' render={() =>*/}
						{/*<Login />*/}
					{/*}*/}
					{/*/>*/}
				</div>
			</div>
		</Router>
	);
}

export default App;
